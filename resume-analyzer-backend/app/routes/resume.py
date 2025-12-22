from fastapi import APIRouter, UploadFile, File

router = APIRouter(prefix="/resume", tags=["resumes"])

@router.post("/analyze")
async def analyze_resume(file: UploadFile = File(...)):
    return {"filename": file.filename,
            "content_type": file.content_type,
            "message": "Resume received. Analysis coming soon 😉"
        }