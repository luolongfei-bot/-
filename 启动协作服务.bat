@echo off
cd /d "%~dp0"
title 项目看板协作服务 (Port 8000)
echo =======================================================
echo 正在启动协作服务 (端口 8000)...
echo 请保持此窗口开启，关闭窗口将停止服务。
echo =======================================================
:: Kill any lingering python process running this specific script (optional, safer not to kill global python)
:: py server.py
python server.py
if %errorlevel% neq 0 (
    echo.
    echo [Error] 'python' command not found, trying 'py'...
    py server.py
)
pause