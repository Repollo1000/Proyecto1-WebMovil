const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.post('/save-user', (req, res) => {
  const newUser = req.body;
  console.log('Received user:', newUser);

  fs.readFile('users.json', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      res.status(500).json({ message: 'Error reading file' });
      return;
    }
    let users = JSON.parse(data);

    const emailExists = users.some(user => user.email === newUser.email);
    const rutExists = users.some(user => user.rut === newUser.rut);

    if (emailExists) {
      res.status(400).json({ message: 'El correo ya está registrado.' });
      return;
    }

    if (rutExists) {
      res.status(400).json({ message: 'El RUT ya está registrado.' });
      return;
    }

    users.push(newUser);
    fs.writeFile('users.json', JSON.stringify(users, null, 2), (err) => {
      if (err) {
        console.error('Error writing file:', err);
        res.status(500).json({ message: 'Error writing file' });
        return;
      }
      res.json({ message: 'User saved' });
      console.log('User saved:', newUser);
    });
  });
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  console.log('Login attempt:', { email, password });

  fs.readFile('users.json', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      res.status(500).json({ message: 'Error reading file' });
      return;
    }
    let users = JSON.parse(data);
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
      res.json({ message: 'Login successful' });
    } else {
      res.status(400).json({ message: 'Correo o contraseña incorrectos' });
    }
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
