from fastapi import APIRouter, Depends, HTTPException, status,Response
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from app.core.database import get_db
from app.models.user import User
from app.schemas.user import UserCreate, UserLogin
from app.core.security import hash_password, verify_password, create_access_token, create_refresh_token, generate_reset_token, generate_reset_token_expiry
from app.core.security import hash_password
from datetime import datetime, timezone

router = APIRouter()


@router.post('/signup')
async def signup(user_data: UserCreate, db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(User).where(User.email == user_data.email))

    existing_user = result.scalars().first()

    if existing_user:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Email already registered")
    
    try:
        hashed = hash_password(user_data.password)
    except ValueError as e:
        # Convert hashing errors (e.g., bcrypt 72-byte limit) into a 422 response
        raise HTTPException(status_code=status.HTTP_422_UNPROCESSABLE_ENTITY, detail=str(e))

    new_user = User(
        name=user_data.name,
        email=user_data.email,
        role=user_data.role,
        password_hash=hashed
    )

    db.add(new_user)
    await db.commit()
    
    return {"message": "User created successfully"}

@router.post('/login')
async def login(user_data: UserLogin, response: Response, db: AsyncSession = Depends(get_db)):
    
    result = await db.execute(select(User).where(User.email == user_data.email))
    user = result.scalars().first()

    if not user:
        raise HTTPException(status_code=400, detail="Invalid email or password")
    
    if not verify_password(user_data.password, user.password_hash):
        raise HTTPException(status_code=400, detail="Invalid password")
    
    access_token = create_access_token({"sub": str(user.id), "role": user.role})
    refresh_token = create_refresh_token({"sub": str(user.id)})

    # Set HttpOnly cookies
    response.set_cookie(
        key="access_token",
        value=access_token,
        httponly=True,
        secure=True,  # Set to True in production with HTTPS
        samesite="lax",
        max_age=60 * 15
    )

    response.set_cookie(
        key="refresh_token",
        value=refresh_token,
        httponly=True,
        secure=True,  # Set to True in production with HTTPS
        samesite="lax",
        max_age=60 * 60 * 24 * 7
    )

    return {"message": "Login successful"}

@router.post('/logout')
async def logout(response: Response):
    response.delete_cookie(key="access_token")
    response.delete_cookie(key="refresh_token")
    return {"message": "Logged out successfully"}

@router.post('/forgot-password')
async def forget_password(email: str, db:AsyncSession = Depends(get_db)):
    result = await db.execute(select(User).where(User.email == email))
    user = result.scalars().first()

    if user:
        user.reset_token = generate_reset_token()
        user.reset_token_expiry = generate_reset_token_expiry()
        await db.commit()
        # Here you would send the reset token to the user's email in a real application
        print(f"Reset link: http://localhost:3000/reset-password?token={user.reset_token}")

    # Always return same message
    return {"message": "If this email exists, a reset link has been sent."}

@router.post('/reset-password')
async def reset_password(token: str, new_password: str, db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(User).where(User.reset_token == token))
    user = result.scalars().first()

    if not user:
        raise HTTPException(status_code=400, detail="Invalid or expired token")
    
    if not user.reset_token_expiry or user.reset_token_expiry < datetime.now(timezone.utc):
        raise HTTPException(status_code=400, detail="Token expired")

    user.password_hash = hash_password(new_password)
    user.reset_token = None
    user.reset_token_expiry = None
    await db.commit()

    return {"message": "Password reset successful"}