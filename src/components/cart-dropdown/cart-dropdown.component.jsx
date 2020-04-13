import React from "react";
import FormButton from "../form-button/form-button.component";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import { toggleShowCartDropdown } from "../../redux/cart/cart.actions";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import CartItem from "../cart-item/cart-item.component";

import "./cart-dropdown.styles.scss";

const CartDropdown = ({ items, history, toggleShowCartDropdown }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {items.length ? (
          items.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <span className="empty-message">Your basket is empty.</span>
        )}
      </div>
      <FormButton
        onClick={() => {
          history.push("/checkout");
          toggleShowCartDropdown();
        }}
      >
        Go to Checkout
      </FormButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  items: selectCartItems,
});

const mapDispatchToProps = (dispatch) => ({
  toggleShowCartDropdown: () => dispatch(toggleShowCartDropdown()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CartDropdown)
);
