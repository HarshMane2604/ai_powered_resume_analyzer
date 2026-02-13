from fastapi import APIRouter, Depends, HTTPException, status
from app.dependencies.auth import get_current_user, require_role

router = APIRouter()

@router.get('/me')
async def get_me(current_user = Depends(get_current_user)):
    return {
        "id": str(current_user.id),
        "name": current_user.name,
        "email": current_user.email,
        "role": current_user.role
    }

# Role based access routes
@router.get('/admin-only')
async def admin_only(current_user = Depends(require_role("admin"))):
    return {"message": f"Hello Admin {current_user.name}!"}