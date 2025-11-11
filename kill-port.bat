@echo off
echo Killing processes on port 3456...
for /f "tokens=5" %%a in ('netstat -aon ^| find ":3456" ^| find "LISTENING"') do taskkill /F /PID %%a 2>nul
echo Port 3456 is free!
pause
