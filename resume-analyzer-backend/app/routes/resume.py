from fastapi import APIRouter, UploadFile, File
from app.services.analysis_service import analyze_resume

router = APIRouter(prefix="/resume", tags=["resumes"])

@router.post("/analyze")
async def analyze_resume_api(file: UploadFile = File(...)):
    result = analyze_resume(file)
    return {"success": True, "data": result}
