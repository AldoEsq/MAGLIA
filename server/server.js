const express = require('express');
const { connectToDB, sql } = require('./db');
const app = express();
const port = 3000;

app.use(express.json());
connectToDB();

app.get('/', (req, res) => {
  res.send('Bienvenido a la API de MagliaSports');
});

app.get('/api/clients', async (req, res) => {
  try {
    const result = await sql.query('SELECT * FROM CLIENT');
    res.json(result.recordset); 
  } catch (err) {
    console.error('Error al obtener clientes:', err.message);
    res.status(500).send('Error al obtener clientes');
  }
});

app.post('/api/clients', async (req, res) => {
  const { name, lastname, cedula, email, password } = req.body; 
  try {
    await sql.query`INSERT INTO CLIENT (NAME, LASTNAME, CEDULA, EMAIL, PASSWORD)
      VALUES (${name}, ${lastname}, ${cedula}, ${email}, ${password})`;
    res.status(201).send('Cliente agregado');
  } catch (err) {
    console.error('Error al agregar cliente:', err.message);
    res.status(500).send('Error al agregar cliente');
  }
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
