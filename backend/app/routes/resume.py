from fastapi import APIRouter, UploadFile, File
from app.services.analysis_service import analyze_resume
from typing import Optional
from fastapi import Form
router = APIRouter()

@router.post("/analyze")
async def analyze_resume_api(file: UploadFile = File(...), job_description: Optional[str] = Form(None)):
    result = analyze_resume(file, job_description)
    return {"success": True, "data": result}
