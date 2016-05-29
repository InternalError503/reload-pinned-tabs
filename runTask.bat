@echo off

if "%1" == "build" goto build
if "%1" == "test" goto test
if "%1" == "run" goto run
if "%1" == "sign" goto sign
goto unknowncommand

:build
jpm xpi
goto end

:test
jpm test
goto end

:run
jpm run
goto end

:: Important to sign requires API kyes from AMO.
:sign
jpm sign --api-key %2 --api-secret %3
goto end

:unknowncommand
echo Unknown task command, Please check tasks.json and try again!
goto end

:end
exit /b %ERRORLEVEL%