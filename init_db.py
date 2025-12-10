from app import app, db, User, Product
import json
import os

def init_db():
    with app.app_context():
        # Create Tables
        db.create_all()
        print("Database tables created.")

        # Create Admin User
        if not User.query.filter_by(username='admin').first():
            admin = User(username='admin')
            admin.set_password('password123') # Default password
            db.session.add(admin)
            print("Admin user created (admin/password123).")

        # Import Products
        if Product.query.count() == 0:
            filepath = os.path.join('data', 'products.json')
            if os.path.exists(filepath):
                with open(filepath, 'r') as f:
                    products_data = json.load(f)
                    for item in products_data:
                        product = Product(
                            name=item['name'],
                            image=item['image'],
                            price=item.get('price', 'Coming Soon')
                        )
                        db.session.add(product)
                print(f"Imported {len(products_data)} products.")
            else:
                print("No data/products.json found to import.")
        else:
            print("Products already exist.")

        db.session.commit()
        print("Database initialization complete.")

if __name__ == '__main__':
    init_db()
