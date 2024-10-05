@echo off

REM Primero crear los archivos JavaScript y HTML
for /l %%i in (1,1,20) do (
    REM Crear el archivo JavaScript
    echo console.log^("Este es el archivo JS de la actividad %%i."^); > e%%i-[cortes][bernal]-[natalia].js

    REM Crear el archivo HTML con el template y elementos adicionales
    echo ^<!DOCTYPE html^> > e%%i-[cortes][bernal]-[natalia].html
    echo ^<html lang="es"^> >> e%%i-[cortes][bernal]-[natalia].html
    echo ^<head^> >> e%%i-[cortes][bernal]-[natalia].html
    echo     ^<meta charset="UTF-8"^> >> e%%i-[cortes][bernal]-[natalia].html
    echo     ^<meta name="viewport" content="width=device-width, initial-scale=1.0"^> >> e%%i-[cortes][bernal]-[natalia].html
    echo     ^<title^>Actividad %%i^</title^> >> e%%i-[cortes][bernal]-[natalia].html
    echo     ^<link rel="stylesheet" href="style.css"^> >> e%%i-[cortes][bernal]-[natalia].html
    echo     ^<script defer src="ConsolePoper.js"^>^</script^> >> e%%i-[cortes][bernal]-[natalia].html
    echo     ^<script defer src="e%%i-[cortes][bernal]-[natalia].js"^>^</script^> >> e%%i-[cortes][bernal]-[natalia].html
    echo ^</head^> >> e%%i-[cortes][bernal]-[natalia].html
    echo ^<body^> >> e%%i-[cortes][bernal]-[natalia].html
    echo     ^<h1^>Actividad %%i^</h1^> >> e%%i-[cortes][bernal]-[natalia].html
    echo     ^<p^>Esta es la página de la actividad %%i.^</p^> >> e%%i-[cortes][bernal]-[natalia].html
    echo     ^<button popovertarget="MyPoper"^>Open MapError^</button^> >> e%%i-[cortes][bernal]-[natalia].html
    echo     ^<div id="MyPoper" popover^> >> e%%i-[cortes][bernal]-[natalia].html
    echo         ^<p id="consoleOutput"^>^</p^> >> e%%i-[cortes][bernal]-[natalia].html
    echo     ^</div^> >> e%%i-[cortes][bernal]-[natalia].html
    echo ^</body^> >> e%%i-[cortes][bernal]-[natalia].html
    echo ^</html^> >> e%%i-[cortes][bernal]-[natalia].html
)

echo Archivos JS y HTML creados exitosamente.
