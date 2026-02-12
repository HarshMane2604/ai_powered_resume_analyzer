from pydantic import BaseModel, EmailStr, Field, field_validator
    
class UserCreate(BaseModel):
    name: str
    email: EmailStr
    password: str = Field(..., min_length=8, max_length=72)

    @field_validator("password")
    @classmethod
    def password_bytes_limit(cls, v: str):
        # bcrypt has a 72-byte limit; enforce on UTF-8 bytes length
        if len(v.encode("utf-8")) > 72:
            raise ValueError("Password must be at most 72 bytes when UTF-8 encoded")
        return v

class UserLogin(BaseModel):
    email: EmailStr
    password: str