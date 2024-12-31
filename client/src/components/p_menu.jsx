import React from 'react';
import { FaUserEdit, FaHistory, FaPlusCircle } from 'react-icons/fa';
import '../css/pcss/p_menu.css';

const PMenu = ({ onMenuClick }) => {
  return (
    <div className="p-menu">
      <ul>
        <li onClick={() => onMenuClick('editProfile')}>
          <FaUserEdit /> Ajustes
        </li>
        <li onClick={() => onMenuClick('paymentHistory')}>
          <FaHistory /> Historial de Pagos
        </li>
        <li onClick={() => onMenuClick('addPayment')}>
          <FaPlusCircle /> Métodos de Pago
        </li>
      </ul>
    </div>
  );
};

export default PMenu;
