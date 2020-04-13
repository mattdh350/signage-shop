import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { toggleShowCartDropdown } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import BasketIconImage from "../../assets/basket-icon.jpg";
import "./cart-icon.styles.scss";

const CartIcon = ({ toggleShowCartDropdown, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleShowCartDropdown}>
      <img className="basket-icon" src={BasketIconImage} alt="Basket" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
  toggleShowCartDropdown: () => dispatch(toggleShowCartDropdown()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
