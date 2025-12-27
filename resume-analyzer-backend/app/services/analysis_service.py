from app.services.file_services import validate_file, save_temp_file
from app.services.extractor_service import extract_text
from app.services.ai_service import analyze_resume_with_ai

def analyze_resume(file):
    validate_file(file)
    temp_path = save_temp_file(file)
    text = extract_text(temp_path)
    ai_result = analyze_resume_with_ai(text)
    return ai_result
