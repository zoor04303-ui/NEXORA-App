from flask import Flask, jsonify, request
import json
import requests

app = Flask(__name__)

# Load dummy database
with open('backend/database/data.json') as f:
    data = json.load(f)

# Example endpoint to connect with Salla API (Reviews)
@app.route('/dashboard')
def dashboard():
    # Example API request headers
    headers = {
        "Authorization": "Bearer b205a40ddd3e2021b5e5270de26b7ca7ade954ac89c22edce85564fc15a7b8d8",
        "Content-Type": "application/json"
    }

    # Example: fetching reviews (replace URL with actual Salla endpoint if needed)
    # response = requests.get('https://api.salla.sa/v1/reviews', headers=headers)
    # reviews = response.json()

    # For now return local dummy data + optional reviews key
    return jsonify({
        "success": True,
        "data": data,
        # "reviews": reviews  # Uncomment if connecting to real API
    })

@app.route('/')
def home():
    return "Welcome to NEXORA Backend!"

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
