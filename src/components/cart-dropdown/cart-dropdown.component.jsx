import React from "react";
import FormButton from "../form-button/form-button.component";
import { connect } from "react-redux";

import CartItem from "../cart-item/cart-item.component";

import "./cart-dropdown.styles.scss";

const CartDropdown = ({ items }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <FormButton>Go to Checkout</FormButton>
    </div>
  );
};

const mapStateToProps = ({ cart: { items } }) => ({
  items,
});

export default connect(mapStateToProps)(CartDropdown);
