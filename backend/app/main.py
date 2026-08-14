from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import resume, auth, protected
from app.core.database import engine, Base
app = FastAPI(title="AI Resume Analyzer API")

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:3001"],  # Keep local development active
    allow_origin_regex=r"https://.*\.vercel\.app", # Allow production frontend on Vercel
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(resume.router, prefix="/resume", tags=["resumes"])
app.include_router(auth.router, prefix="/auth", tags=["auth"])
app.include_router(protected.router, tags=["protected"])

@app.get("/")
def health_check():
    return {"status": "Backend is alive 💃"}

@app.on_event("startup")
async def on_startup():
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)
