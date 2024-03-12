from flask import Flask, render_template, jsonify, request
from flask_cors import CORS  # Import CORS extension
from model import predict_image
import utils

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/', methods=['GET'])
def home():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    if request.method == 'POST':
        try:
            file = request.files['file']
            img = file.read()
            prediction = predict_image(img)
            result = {
                'prediction': prediction,
                'details': utils.disease_dic.get(prediction, "Unknown")
            }
            return jsonify(result), 200
        except Exception as e:
            print('Error predicting disease:', e)
            return jsonify({'error': 'Internal Server Error'}), 500

if __name__ == "__main__":
    app.run(debug=True)
