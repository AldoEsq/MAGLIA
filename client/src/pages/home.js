import React from 'react';
import '../css/home.css';
import logo from '../images/logo.png';
import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa';
import promo1 from '../images/promo1.mp4';
import promo2 from '../images/promo2.mp4';

const Home = () => {
  return (
    <div className="contenedor">
      <div className="rectangulo_central">
        <div className="logo">
          <img src={logo} alt="MagliaLogo" />
        </div>
        <p>"Slogan"</p>
        <div className="social-buttonss">
          <a
            href="https://www.instagram.com/magliasportec/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-circle instagram-btn"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.facebook.com/p/Maglia-Sports-Ec-100064546614462"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-circle facebook-btnn"
          >
            <FaFacebookF size={24} />
          </a>
          <a
            href="https://wa.me/593980063023"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-circle whatsapp-btn"
          >
            <FaWhatsapp size={24} />
          </a>
        </div>
      </div>
      <div className="Izquierda">
        <video src={promo1} autoPlay loop muted className="video"></video>
      </div>
      <div className="Derecha">
        <video src={promo2} autoPlay loop muted className="video"></video>
      </div>
    </div>
  );
};

export default Home;

