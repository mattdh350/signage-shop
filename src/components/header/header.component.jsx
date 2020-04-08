import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.scss";
import LogoImage from "../../assets/logo.jpg";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <img className="logo" src={LogoImage} alt="Signage Shop Logo" />
      </Link>
      <div className="main-menu">
        <Link to="/" className="main-menu-item">
          HOME
        </Link>
        <Link to="/shop" className="main-menu-item">
          SHOP
        </Link>
        <Link to="/contact" className="main-menu-item">
          CONTACT
        </Link>
      </div>
    </div>
  );
};

export default Header;
