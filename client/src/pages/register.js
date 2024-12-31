import React, { useState } from 'react';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import axios from 'axios';
import '../css/register.css';

const Register = () => {
  const [formState, setFormState] = useState({
      name: '',
      lastname: '',
      cedula: '',
      email: '',
      password: '',
    });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/clients', formState);
      
      if (response.status === 201) {
        alert('Registro exitoso');
        setFormState({
          name: '',
          lastname: '',
          cedula: '',
          email: '',
          password: '',
        }); 
      }
    } catch (error) {
      console.error('Error al registrar el cliente:', error);
      alert('Hubo un error al registrar el cliente. Intenta de nuevo.');
    }
  };

  const handleGoogleRegister = () => {
    console.log('Registro con Google');
  };

  const handleFacebookRegister = () => {
    console.log('Registro con Facebook');
  };

  return (

    <div className="rform">
      <div className="logo1"></div>
      <div className="register-bg"></div>
      <h1>Crea tu cuenta</h1>

      <div className="social-buttons">
        <p>Realiza el registro con</p>
        <button className="google-btn" onClick={handleGoogleRegister}>
          <FaGoogle style={{ marginRight: '5px' }} /> Google
        </button>
        <button className="facebook-btn" onClick={handleFacebookRegister}>
          <FaFacebook style={{ marginRight: '5px' }} /> Facebook
        </button>
      </div>

      <p>Completa tus datos aqui</p>

      <div className="formulario">

      <form onSubmit={handleSubmit}>
          <div className="CNombre">
            <label htmlFor="name">Nombre<span className="required">*</span></label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Nombre"
              value={formState.name}
              onChange={handleInputChange}
            />
            <label htmlFor="apellido">Apellido<span className="required">*</span></label>
            <input
              id="apellido"
              type="text"
              name="apellido"
              placeholder="Apellido"
              value={formState.lastname}
              onChange={handleInputChange}
            />
          </div>
            <label htmlFor="email">Email <span className="required">*</span></label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              value={formState.email}
              onChange={handleInputChange}
            />
            <label htmlFor="cedula">Cedula <span className="required">*</span></label>
            <input
              id="cedula"
              type="text"
              name="cedula"
              placeholder="Cedula"
              value={formState.cedula}
              onChange={handleInputChange}
            />
            <label htmlFor="password">Password <span className="required">*</span></label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              value={formState.password}
              onChange={handleInputChange}
            />
          <button type="submit">Registrar</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
