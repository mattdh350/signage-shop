import React from "react";
import { connect } from "react-redux";

import { toggleShowCartDropdown } from "../../redux/cart/cart.actions";
import BasketIconImage from "../../assets/basket-icon.jpg";
import "./cart-icon.styles.scss";

const CartIcon = ({ toggleShowCartDropdown }) => {
  return (
    <div className="cart-icon" onClick={toggleShowCartDropdown}>
      <img className="basket-icon" src={BasketIconImage} alt="Basket" />
      <span className="item-count">0</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleShowCartDropdown: () => dispatch(toggleShowCartDropdown()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
