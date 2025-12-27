from dotenv import load_dotenv
import os

load_dotenv()

PROJECT_NAME = os.getenv("PROJECT_NAME", "Resume Analyzer Backend")
GEMINI_API_KEY = os.getenv("GOOGLE_GENAI_API_KEY")