# flask with ngrok
from flask import Flask, render_template, request, jsonify
from flask_ngrok import run_with_ngrok

app = Flask(__name__)

run_with_ngrok(app)


# Mock database of restaurants
restaurants = [
    {'Jewel of Nizam - The Minar': 'Jewel of Nizam', 'cuisine': 'Hyderabadi', 'Jewel of Nizam - The Minar, The Golkonda Resort, Gandipet, Hyderabad, Telangana 500075': 'Gandipet, telengana'},
    {'PREGO': 'Prego', 'cuisine': 'italian', 'Prego, Raheja IT Park, The Westin, Mindspace, HUDA Techno Enclave, HITEC City, Hyderabad, Telangana 500081': 'The Westin Hyderabad Mindspace'},
    # Add more restaurants as needed
]

@app.route('/')
def index():
    return render_template('index.html', restaurants=restaurants)

@app.route('/search', methods=['POST'])
def search():
    query = request.form.get('query').lower()
    results = [restaurant for restaurant in restaurants if query in restaurant['cuisine'].lower()]
    return jsonify(results)

if __name__ == '__main__':
    app.run(debug=True)
