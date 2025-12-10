from flask import Flask, render_template, request, flash, redirect, url_for
import json
import os

app = Flask(__name__)
app.secret_key = 'super_secret_key_for_dev' # Required for flashing messages

def load_products():
    filepath = os.path.join('data', 'products.json')
    try:
        with open(filepath, 'r') as f:
            return json.load(f)
    except Exception as e:
        print(f"Error loading products: {e}")
        return []

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/shop')
def shop():
    products = load_products()
    return render_template('Shop.html', products=products)

@app.route('/videos')
def videos():
    return render_template('Videos.html')

@app.route('/music')
def music():
    return render_template('Music.html')

@app.route('/about', methods=['GET', 'POST'])
def about():
    if request.method == 'POST':
        name = request.form.get('name')
        email = request.form.get('email')
        message = request.form.get('message')

        # Here you would typically save this to a database or send an email
        print(f"Contact Form Submission:\nName: {name}\nEmail: {email}\nMessage: {message}")

        flash('Thank you for your message! We will get back to you soon.', 'success')
        return redirect(url_for('about'))

    return render_template('AboutUs.html')

if __name__ == '__main__':
    app.run(debug=True, port=8000)
