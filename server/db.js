const sql = require('mssql');
require('dotenv').config(); 

const config = {
  user: process.env.DB_USER,        
  password: process.env.DB_PASSWORD, 
  server: process.env.DB_SERVER,     
  database: process.env.DB_NAME,    
  options: {
    encrypt: false, 
    trustServerCertificate: true 
  }
};

const connectToDB = async () => {
  try {
    await sql.connect(config);
    console.log('Conexión exitosa a la base de datos.');
  } catch (err) {
    console.error('Error al conectarse a la base de datos:', err.message);
  }
};

module.exports = { sql, connectToDB };
