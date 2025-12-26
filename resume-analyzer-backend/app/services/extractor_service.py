from pathlib import Path
import fitz
import docx

def extract_text(file_path :Path) -> str:
    if file_path.suffix == ".pdf":
        text = ""
        doc = fitz.open(file_path)
        for page in doc:
            text += page.get_text()
        return text
    
    if file_path.suffix in [".doc", ".docx"]:
        doc = docx.Document(file_path)
        return "\n".join(p.text for p in doc.paragraphs)
    
    raise ValueError("Unsupported file format")
