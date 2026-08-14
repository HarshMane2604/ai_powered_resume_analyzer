import json
import google.generativeai as genai
from fastapi import HTTPException
from app.core.config import GEMINI_API_KEY

genai.configure(api_key=GEMINI_API_KEY)

model = genai.GenerativeModel(
    model_name="gemini-2.5-flash",
    generation_config={
        "temperature": 0.2,
        "top_p": 0.9,
        "max_output_tokens": 8192,
    }
)


def analyze_resume_with_ai(resume_text:str, job_description:str = None) -> dict:
    prompt = f"""
        Return ONLY valid JSON.
        No markdown.
        No explanations.
        No extra text.
        If a job description is provided, compare it against the resume to find missing keywords and calculate an ATS match score.

        Schema:
        {{
        "ats_score": number,
        "jd_match_score": number,
        "overall_score": number,
        "missing_keywords": string[],
        "rewording_suggestions": string[],
        "skills": string[],
        "strengths": string[],
        "weaknesses": string[],
        "suggestions": string[],
        "recommended_skills": string[],
        "section_scores": {{
            "Content": number,
            "Formatting": number,
            "keywords": number,
            "work_experience": number
        }}
        }}
        Resume:
        {resume_text}
        Job Description (optional):
        {job_description if job_description else 'None provided. Please evaluate the resume generally.'}
    """
    try:
        response = model.generate_content(prompt)
        raw_text = response.text.strip()
        print(f"\n\nRAW TEXT: {raw_text}\n\n")

        if raw_text.startswith("```"):
            raw_text = raw_text.replace("```json", "").replace("```", "").strip()

        
        return json.loads(raw_text)
    except json.JSONDecodeError:
        raise HTTPException(
            status_code=500,
            detail="Ai Returned the invalid json"
        )
    
    except Exception as e:
        import traceback
        traceback.print_exc()
        raise HTTPException(
            status_code=500,
            detail=f"AI Resume Analysis Failed: {str(e)}"
        )

