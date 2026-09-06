@echo off
echo "== Initializing repo =="
echo "# pythonwensocket" > README.md

REM Init git only if not already initialized
IF NOT EXIST ".git" git init

REM Stage and commit
echo "# Jai-Bhavani-Plywood-Hardware" >> README.md
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/mosinDataBase/Jai-Bhavani-Plywood-Hardware.git
git push -u origin main

REM Push to GitHub
git push -u origin main

echo === Commit Complete ===

REM Deploy (this assumes deploy script is correctly set up in package.json)
echo === Deploying the app ===
REM call npm run deploy

echo === Deployment Complete ===
pause
