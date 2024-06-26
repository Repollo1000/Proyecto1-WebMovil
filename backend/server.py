from flask import Flask, json, request, jsonify
import mysql.connector
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity, unset_jwt_cookies
from flask_cors import CORS
import os

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
    #Versa123.
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

# Endpoint de perfil de usuario
@app.route('/profile', methods=['GET'])
@jwt_required()
def profile():
    current_user = get_jwt_identity()
    user_id = current_user.get('id')

    cur = db.cursor()
    query = 'SELECT username, email, rut, region, comuna, role FROM users WHERE id = %s'
    cur.execute(query, (user_id,))
    result = cur.fetchone()
    cur.close()

    if result:
        user_profile = {
            'username': result[0],
            'email': result[1],
            'rut': result[2],
            'region': result[3],
            'comuna': result[4],
            'role': result[5]
        }
        return jsonify(user_profile)
    else:
        return jsonify({"message": "User not found"}), 404

@app.route('/logout', methods=['POST'])
@jwt_required()
def logout():
    response = jsonify({"logout": True})
    unset_jwt_cookies(response)  # Elimina las cookies JWT
    return response, 200

@app.route('/info', methods=['GET'])
def get_info():
    try:
        with open('info.json', 'r', encoding='utf-8') as file:
            data = json.load(file)
        return jsonify(data)
    except Exception as e:
        return jsonify({"message": "Error reading info.json"}), 500

# Estado inicial del script
estado_script = "Sin Actividad Reciente"  # Estado inicial

# Ruta para cambiar el estado del script
@app.route('/cambiar_estado', methods=['POST'])
def cambiar_estado():
    global estado_script
    estado_script = request.json.get('estado')
    nuevo_estado = estado_script
    if nuevo_estado in ["AsesorDeportivo","AsesorDeportivo-chat","Sin Actividad Reciente","AsesorEmocional","AsesorEmocional-chat","NADA","","TutorMatematica","TutorMatematica-chat","cantar","ReconocimientoFacial"]:
        estado_script = nuevo_estado
        if(estado_script!= ""):
            return jsonify({"message": f"{estado_script}"}), 200
        else:
            estado_script = "uso de ohbot"
            return jsonify({"message": f"HOME"}), 200
    else:
        return jsonify({"error": "Estado no válido"}), 400


file_path = os.path.join(os.path.dirname(__file__), 'conversacion_deportiva.json')

@app.route('/obtener_chat_deportivo', methods=['GET'])
def obtener_chat_deportivo():
    global estado_script

    try:
        if estado_script == 'AsesorDeportivo-chat':
            file_path = os.path.join(os.path.dirname(__file__), 'OHBOT', 'conversacion_deportiva.json')
        elif estado_script == 'AsesorEmocional-chat':
            file_path = os.path.join(os.path.dirname(__file__), 'OHBOT', 'conversacion_emocional.json')
        elif estado_script == 'TutorMatematica-chat':
            file_path = os.path.join(os.path.dirname(__file__), 'OHBOT', 'conversacion_matematicas.json')
        else:
            file_path = os.path.join(os.path.dirname(__file__), 'conversacion_deportiva.json')

        if not os.path.exists(file_path):
            raise FileNotFoundError(f"El archivo {file_path} no existe.")

        with open(file_path, 'r', encoding='utf-8') as file:
            chat_deportivo = json.load(file)

        return jsonify(chat_deportivo), 200

    except FileNotFoundError as fnf_error:
        print(f"Error al leer el archivo JSON: {str(fnf_error)}")
        return jsonify({"message": f"Error al leer el archivo JSON: {str(fnf_error)}"}), 404

    except Exception as e:
        print(f"Error al leer el archivo JSON: {str(e)}")
        return jsonify({"message": f"Error al leer el archivo JSON: {str(e)}"}), 500


# Endpoint para verificar el rol del usuario
@app.route('/verificar_rol', methods=['GET'])
@jwt_required()
def verificar_rol():
    current_user = get_jwt_identity()
    user_id = current_user.get('id')

    cur = db.cursor()
    query = 'SELECT role FROM users WHERE id = %s'
    cur.execute(query, (user_id,))
    result = cur.fetchone()
    cur.close()

    if result:
        user_role = result[0]
        return jsonify({"role": user_role})
    else:
        return jsonify({"message": "User not found"}), 404


@app.route('/user-count', methods=['GET'])
@jwt_required()
def get_user_count():
    current_user = get_jwt_identity()
    if current_user['role'] != 'admin':
        return jsonify({"message": "Access forbidden"}), 403

    cur = db.cursor()
    query = 'SELECT COUNT(*) FROM users'
    cur.execute(query)
    result = cur.fetchone()
    cur.close()

    if result:
        return jsonify({"user_count": result[0]})
    else:
        return jsonify({"message": "Error fetching user count"}), 500


# Endpoint para obtener el último usuario registrado
@app.route('/last-user', methods=['GET'])
@jwt_required()
def last_user():
    cur = db.cursor()
    query = 'SELECT username FROM users ORDER BY id DESC LIMIT 1'
    cur.execute(query)
    result = cur.fetchone()
    cur.close()
    if result:
        return jsonify({"last_user": result[0]})
    else:
        return jsonify({"last_user": None}), 404


# Ruta para obtener el estado actual del script
@app.route('/obtener_estado', methods=['GET'])
def obtener_estado():
    global estado_script
    return jsonify({"estado": estado_script}), 200


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=3000)
