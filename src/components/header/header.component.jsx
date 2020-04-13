import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import LogoImage from "../../assets/logo.jpg";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCartVisible } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import "./header.styles.scss";

const SignOut = () => auth.signOut();

const Header = ({ currentUser, showCartDropdown }) => {
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
        <CartIcon />
      </div>
      {showCartDropdown ? <CartDropdown /> : null}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  showCartDropdown: selectCartVisible,
});
export default connect(mapStateToProps)(Header);
