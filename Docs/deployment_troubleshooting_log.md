# Deployment Troubleshooting & Fixes Log

This document serves as a record of all the issues encountered and resolved while setting up the CI/CD pipeline and Docker deployments for the AI Resume Analyzer project.

## 1. GitHub Actions Workflow Syntax Error
- **Issue:** The workflow failed due to an invalid YAML key.
- **Fix:** Changed `runs:` to `run:` in the backend dependency installation step in `.github/workflows/ci-cd.yml`.

## 2. Missing Frontend `.dockerignore`
- **Issue:** The frontend Docker build lacked a `.dockerignore` file, which could cause local files like `node_modules` or `.next` to bloat the build context.
- **Fix:** Created `frontend/.dockerignore` to exclude standard Next.js and Node.js directories.

## 3. GitHub Action Name Typo
- **Issue:** Workflow failed with `Unable to resolve action docker/setup-qemu-actions, repository not found`.
- **Fix:** Corrected the action name from `docker/setup-qemu-actions@v3` to `docker/setup-qemu-action@v3` (singular) in `ci-cd.yml`.

## 4. Backend Requirements Typo
- **Issue:** The backend `Dockerfile` attempted to install from a non-existent file.
- **Fix:** Changed `requirement.txt` to `requirements.txt` in the `RUN pip install` command within `backend/Dockerfile`.

## 5. Docker Buildx Cache Exporter Typo
- **Issue:** Build failed with `unknown cache exporter: "register"`.
- **Fix:** Changed `type=register` to `type=registry` for the `cache-from` and `cache-to` properties in `ci-cd.yml`.

## 6. Docker Hub Repository Consolidation
- **Issue:** The workflow was originally configured to push to two separate repositories (`ai-backend` and `ai-frontend`), but only a single repository (`ai-resume-analyzer`) was created on Docker Hub.
- **Fix:** Updated the image tags in `ci-cd.yml` to push both images to the single repository using distinct tags: `ai-resume-analyzer:backend-latest` and `ai-resume-analyzer:frontend-latest`.

## 7. GitHub Actions Node 20 Deprecation Warning
- **Issue:** The workflow logs showed warnings about Node 20 deprecation in the GitHub Actions runner environment.
- **Fix:** Upgraded `docker/build-push-action@v5` to `v6` in `ci-cd.yml`, which resolves the underlying runner warnings.

## 8. Alpine User/Group Setup Typos
- **Issue:** The frontend build failed with `addgroup: unrecognized option: grid`.
- **Fix:** Fixed typographical errors in `frontend/Dockerfile` by changing `--grid` to `--gid` and `-uid` to `--uid` for the `addgroup` and `adduser` commands.

## 9. Invalid Docker COPY Syntax
- **Issue:** The `npm ci` command failed with exit code 254 because `package-lock.json` was corrupted.
- **Fix:** Updated the COPY command in `frontend/Dockerfile` from `COPY package.json package-lock.json` to `COPY package.json package-lock.json ./`. Without the trailing `./`, Docker was overwriting `package-lock.json` with the contents of `package.json`.

## 10. Next.js Standalone Build Missing
- **Issue:** The frontend build failed with `"/app/.next/standalone": not found` because Next.js wasn't generating the standalone folder required for optimized Docker builds.
- **Fix:** Added `output: "standalone"` to `frontend/next.config.ts`.

## 11. Missing Backend `.dockerignore`
- **Issue:** The backend directory did not have a `.dockerignore`, risking virtual environment conflicts if `.venv` or local databases (`sql_app.db`) were copied into the container.
- **Fix:** Added a comprehensive Python `backend/.dockerignore` to ensure a clean build context.
