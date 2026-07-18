import json
import google.generativeai as genai
from fastapi import HTTPException
from app.core.config import GEMINI_API_KEY

genai.configure(api_key=GEMINI_API_KEY)

model = genai.GenerativeModel(
    model_name="gemini-2.5-flash-lite",
    generation_config={
        "temperature": 0.2,
        "top_p": 0.9,
        "max_output_tokens": 1024,
    }
)


def analyze_resume_with_ai(resume_text:str) -> dict:
    prompt = f"""
        Return ONLY valid JSON.
        No markdown.
        No explanations.
        No extra text.

        Schema:
        {{
        "ats_score": number,
        "overall_score": number,
        "skills": string[],
        "strengths": string[],
        "weaknesses": string[],
        "suggestions": string[],
        "recommended_skills": string[],
        "section_scores": {{
            "Content": number,
            "Formatting": number,
            "keywords": number,
            "work_experience": number,
        }}
        }}
        Resume:
        {resume_text}
    """
    try:
        response = model.generate_content(prompt)
        raw_text = response.text.strip()

        if raw_text.startswith("```"):
            raw_text = raw_text.strip("```json").strip("```")
        
        return json.loads(raw_text)
    except json.JSONDecodeError:
        raise HTTPException(
            status_code=500,
            detail="Ai Returned the invalid json"
        )
    
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"AI Resume Analysis Failed: {str(e)}"
        )

