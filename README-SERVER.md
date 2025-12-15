<<<<<<< HEAD
# How to Run the Website Locally (Static)

## Quick Start
1. Double-click `start-server.bat` (Windows).
2. Open your browser to: **http://localhost:8000**

### Manual Start
1. Open a terminal in the project folder.
2. Run: `python -m http.server 8000`
3. Visit: http://localhost:8000

## Project Structure
- **index.html**: Home page.
- **static/**: Contains CSS, JS, and Image files.
- **Shop.html**, **Videos.html**, etc.: Other pages.
=======
# How to Run the Website Locally (Flask Backend)

## Prerequisites
- Python installed (likely already available)

## Quick Start
### Windows
1. Double-click `start-server.bat`.
   - This will automatically install Flask (if needed) and start the server.
2. Open your browser to: **http://localhost:8000**

### Mac/Linux or Manual Start
1. Open a terminal in the project folder.
2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
3. Run the application:
   ```bash
   python app.py
   ```
4. Open your browser to: **http://localhost:8000**

## Project Structure
- **app.py**: The Python Flask application (routes and logic).
- **templates/**: Contains HTML files.
- **static/**: Contains CSS, JS, and Image files.

## Troubleshooting
- **Port already in use?** Edit `app.py` and change `port=8000` to something else (e.g., 8001).
>>>>>>> origin/Main
