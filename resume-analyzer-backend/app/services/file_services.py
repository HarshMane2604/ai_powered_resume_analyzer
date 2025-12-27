import uuid
from pathlib import Path
from fastapi import UploadFile, HTTPException
from app.core.constants import ALLOWED_MIME_TYPES, MAX_FILE_SIZE_MB

TEMP_DIR = Path("temp_uploads")
TEMP_DIR.mkdir(exist_ok=True)

def validate_file(file: UploadFile):
    if file.content_type not in ALLOWED_MIME_TYPES:
        raise HTTPException(status_code=400, detail="Unsupported file type")
    
    file.file.seek(0, 2)
    size_mb = file.file.tell() / (1024 * 1024)
    file.file.seek(0)

    if size_mb > MAX_FILE_SIZE_MB:
        raise HTTPException(status_code=400, detail="Files too large")

def save_temp_file(file: UploadFile) -> Path:
    # validate_file(file)
    suffix = Path(file.filename).suffix
    temp_path = TEMP_DIR / f"{uuid.uuid4()}{suffix}"

    with open(temp_path, 'wb') as f:
        while chunk := file.file.read(1024 * 1024):
            f.write(chunk)
    file.file.seek(0)
    return temp_path