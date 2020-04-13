import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import "./header.styles.scss";
import LogoImage from "../../assets/logo.jpg";

const SignOut = () => auth.signOut();

const Header = ({ currentUser }) => {
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
        {currentUser ? (
          <Link to="" onClick={SignOut} className="main-menu-item">
            SIGN OUT
          </Link>
        ) : (
          <Link to="/signin" className="main-menu-item">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});
export default connect(mapStateToProps)(Header);
