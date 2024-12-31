import React, { useState } from 'react';
import PMenu from '../../components/p_menu';
import ProfileEdit from '../../components/profileedit';
import PaymentHistory from '../../components/paymenthistory';
import AddPaymentMethod from '../../components/addpaymentmethod';
import '../../css/pcss/p_settings.css';


const PSettings = () => {
  const [selectedComponent, setSelectedComponent] = useState('editProfile');

  const renderComponent = () => {
    switch (selectedComponent) {
      case 'editProfile':
        return <ProfileEdit />;
      case 'paymentHistory':
        return <PaymentHistory />;
      case 'addPayment':
        return <AddPaymentMethod />;
      default:
        return <ProfileEdit />;
    }
  };

  return (
    <div className="p-settings">
      <PMenu onMenuClick={setSelectedComponent} />
      <div className="p-settings-content">
        {renderComponent()}
      </div>
    </div>
  );
};

export default PSettings;
