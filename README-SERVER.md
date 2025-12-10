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
