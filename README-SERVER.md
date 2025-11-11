# How to Run the Website Locally

## Quick Start Options

### Option 1: VS Code Live Server (Recommended) ⭐
1. Install the **Live Server** extension in VS Code
2. Right-click on `index.html` → Select "Open with Live Server"
3. Browser will open automatically and auto-refresh on file changes

### Option 2: Python HTTP Server
1. Open terminal in this folder
2. Run: `python -m http.server 8000`
3. Open browser to: http://localhost:8000
4. Note: This doesn't auto-refresh, you'll need to manually refresh the page

**Quick Start Script:**
- Double-click `start-server.bat` (Windows)
- Server will start on http://localhost:8000

### Option 3: Node.js HTTP Server (if you have Node.js)
1. Install: `npm install -g http-server`
2. Run: `http-server -p 8000`
3. Open browser to: http://localhost:8000

### Option 4: Browser Extension
- Install "Web Server for Chrome" extension
- Point it to your project folder
- Click "Start server"

## Current Server Status
If you see a server running, visit: **http://localhost:8000**

## Tips
- **Live Server Extension** is best for development (auto-refresh on save)
- **Python/Node servers** are good for testing without extensions
- Remember to stop the server when done (Ctrl+C in terminal)

## Troubleshooting
- **Port already in use?** Change the port number (e.g., 8001, 8080)
- **Can't access localhost?** Make sure the server is running and check firewall settings
- **Changes not showing?** Clear browser cache (Ctrl+Shift+R) or hard refresh

