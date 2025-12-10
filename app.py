from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/shop')
def shop():
    return render_template('Shop.html')

@app.route('/videos')
def videos():
    return render_template('Videos.html')

@app.route('/music')
def music():
    return render_template('Music.html')

@app.route('/about')
def about():
    return render_template('AboutUs.html')

if __name__ == '__main__':
    app.run(debug=True, port=8000)
