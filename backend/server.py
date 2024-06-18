from flask import Flask, request, jsonify
import mysql.connector
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Habilitar CORS

# Configura la clave secreta de JWT
app.config['JWT_SECRET_KEY'] = 'your_secret_key'  # Cambia esto por una clave real en producción

# Inicializa la extensión JWT
jwt = JWTManager(app)
bcrypt = Bcrypt(app)

# Configuración de la conexión a la base de datos
db = mysql.connector.connect(
    host="localhost",
    user="root",
    passwd="Versa123.",
    database="versa"  # Reemplaza con el nombre de tu base de datos
)

@app.route('/')
def index():
    return "Bienvenido al Servicio Web Flask!"

# Endpoint de registro
@app.route('/save-user', methods=['POST'])
def save_user():
    data = request.get_json()
    username = data['username']
    email = data['email']
    rut = data['rut']
    region = data['region']
    comuna = data['comuna']
    password = data['password']
    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')

    cur = db.cursor()
    query = 'INSERT INTO users (username, email, rut, region, comuna, password, role) VALUES (%s, %s, %s, %s, %s, %s, "user")'
    try:
        cur.execute(query, (username, email, rut, region, comuna, hashed_password))
        db.commit()
        cur.close()
        return jsonify({"message": "User registered successfully"})
    except mysql.connector.Error as err:
        if err.errno == mysql.connector.errorcode.ER_DUP_ENTRY:
            return jsonify({"message": "El correo o RUT ya está registrado."}), 400
        else:
            return jsonify({"message": "Error registering user"}), 500

# Endpoint de inicio de sesión
@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data['email']
    password = data['password']

    cur = db.cursor()
    query = 'SELECT * FROM users WHERE email = %s'
    cur.execute(query, (email,))
    result = cur.fetchone()
    cur.close()

    if not result:
        return jsonify({"message": "User not found"}), 404

    user_id, username, user_email, user_rut, user_region, user_comuna, user_password, user_role = result

    if bcrypt.check_password_hash(user_password, password):
        token = create_access_token(identity={'id': user_id, 'role': user_role})
        return jsonify({"auth": True, "token": token, "role": user_role})
    else:
        return jsonify({"message": "Invalid password"}), 401

@app.route('/info', methods=['GET'])
def get_info():
    try:
        with open('info.json', 'r') as file:
            data = json.load(file)
        return jsonify(data)
    except Exception as e:
        return jsonify({"message": "Error reading info.json"}), 500

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=3000)
