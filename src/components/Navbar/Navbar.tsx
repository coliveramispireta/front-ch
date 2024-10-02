import React from 'react';
import '../../styles/components/navbar.scss'; 
import LogoImage from "../../../public/icons/logo.svg";
import PhoneIcon from "../../../public/icons/phone.svg";

const Navbar = () => {
  return (
    <div className="header">
    <div className="wrapper">
       <LogoImage className="wrapper__logo" /> 
      <div className="wrapper__call">
        <p className="wrapper__call--text">¡Compra por este medio!</p>
        <a href="tel:(01) 411 6001" className="wrapper__call--number">
          <PhoneIcon />
          (01) 411 6001
        </a>
      </div>
    </div>
  </div>
  )
}

export default Navbar