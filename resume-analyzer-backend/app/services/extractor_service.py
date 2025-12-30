from pathlib import Path
import fitz
import docx

def extract_text(file_path: Path) -> str:
    suffix = file_path.suffix.lower()  # 🔥 THIS LINE FIXES 80% ISSUES
    print("DEBUG file path:", file_path)
    print("DEBUG suffix:", file_path.suffix)

    if suffix == ".txt":
        with open(file_path, "r", encoding="utf-8", errors="ignore") as f:
            return f.read()

    if suffix == ".pdf":
        text = ""
        doc = fitz.open(file_path)
        for page in doc:
            text += page.get_text()
        return text

    if suffix in [".doc", ".docx"]:
        doc = docx.Document(file_path)
        return "\n".join(p.text for p in doc.paragraphs)

    raise ValueError(f"Unsupported file format: {suffix}")
