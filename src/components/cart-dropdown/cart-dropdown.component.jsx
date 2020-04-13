import React from "react";
import FormButton from "../form-button/form-button.component";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <FormButton>Go to Checkout</FormButton>
    </div>
  );
};

export default CartDropdown;