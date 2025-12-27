from pydantic import BaseModel
from typing import List

class ResumeAnalysisResponse(BaseModel):
    ats_score: int
    skills: List[str]
    strengths: List[str]
    weaknesses: List[str]
    suggestions: List[str]
