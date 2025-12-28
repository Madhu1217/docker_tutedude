from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/submit", methods=["POST"])
def submit():
    data = request.json
    name = data.get("name")
    email = data.get("email")
    message = data.get("message")

    return jsonify({
        "status": "success",
        "received": {
            "name": name,
            "email": email,
            "message": message
        }
    })

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
