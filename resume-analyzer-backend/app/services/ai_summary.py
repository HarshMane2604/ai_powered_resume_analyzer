import google.generativeai as genai
from app.core.config import GEMINI_API_KEY

genai.configure(api_key=GEMINI_API_KEY)

model = genai.GenerativeModel("gemini-pro")

def analyze_resume_with_ai(resume_text: str) -> dict:
    prompt = f"""
You are an ATS resume analyzer.
Analyze the following resume and return STRICT JSON with:
- ats_score (0-100)
- skills (array)
- strengths (array)
- weaknesses (array)
- suggestions (array)

Resume:
{resume_text}
"""

    response = model.generate_content(prompt)

    return response.text  # later parse JSON safely
