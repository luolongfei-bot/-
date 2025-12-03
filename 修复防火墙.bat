@echo off
echo Checking privileges...

:: Check for Admin rights
net session >nul 2>&1
if %errorLevel% neq 0 (
    echo.
    echo ==============================================================
    echo  ERROR: NO ADMIN RIGHTS
    echo ==============================================================
    echo.
    echo  Please RIGHT-CLICK this file and select "Run as administrator"
    echo.
    pause
    exit
)

echo.
echo [OK] Admin rights detected.
echo.
echo Removing old rules for Port 3000...
netsh advfirewall firewall delete rule name="ProjectBoard Allow Port 3000" >nul 2>&1

echo.
echo Adding new Firewall Rule for Port 8000 (New Port)...
netsh advfirewall firewall add rule name="ProjectBoard Allow Port 8000" dir=in action=allow protocol=TCP localport=8000 profile=any

echo.
echo ==============================================================
echo  SUCCESS! Firewall rule updated to Port 8000.
echo  Please restart the server now.
echo ==============================================================
echo.
pause