const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// Configurar la conexión a la base de datos
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Reemplaza con tu usuario de MySQL
  password: '', // Reemplaza con tu contraseña de MySQL
  database: 'versa' // Reemplaza con el nombre de tu base de datos
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the MySQL database.');
});

// Endpoint de registro
app.post('/save-user', (req, res) => {
  const { username, email, rut, region, comuna, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 8);

  const query = 'INSERT INTO users (username, email, rut, region, comuna, password, role) VALUES (?, ?, ?, ?, ?, ?, "user")';
  db.query(query, [username, email, rut, region, comuna, hashedPassword], (err, result) => {
    if (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        return res.status(400).json({ message: 'El correo o RUT ya está registrado.' });
      }
      return res.status(500).json({ message: 'Error registering user' });
    }
    res.status(200).json({ message: 'User registered successfully' });
  });
});

// Endpoint de inicio de sesión
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  const query = 'SELECT * FROM users WHERE email = ?';
  db.query(query, [email], (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error logging in' });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    const user = results[0];
    const passwordIsValid = bcrypt.compareSync(password, user.password);

    if (!passwordIsValid) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    const token = jwt.sign({ id: user.id, role: user.role }, 'your_secret_key', {
      expiresIn: 86400 // 24 hours
    });

    res.status(200).json({ auth: true, token: token, role: user.role });
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

app.get('/info', (req, res) => {
  fs.readFile('info.json', (err, data) => {
    if (err) {
      console.error('Error reading info.json:', err);
      res.status(500).json({ message: 'Error reading info.json' });
      return;
    }
    res.json(JSON.parse(data));
  });
});
