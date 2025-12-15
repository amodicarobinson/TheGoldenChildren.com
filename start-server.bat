@echo off
echo Starting Flask server...
echo.
echo Open your browser and go to: http://localhost:8000
echo.
echo Press Ctrl+C to stop the server
echo.
cd /d "%~dp0"
<<<<<<< HEAD
python -m http.server 8000
=======
pip install -r requirements.txt
python init_db.py
python app.py
>>>>>>> origin/Main
