import React from "react";
import { connect } from "react-redux";

import { removeItem } from "../../redux/cart/cart.actions";

import "./checkout-item.styles.scss";

const CheckoutItem = ({
  item: { id, imageUrl, name, price, quantity },
  removeItemFromCart,
}) => {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">${price}</span>
      <div className="remove-button" onClick={() => removeItemFromCart(id)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeItemFromCart: (itemId) => dispatch(removeItem(itemId)),
});
export default connect(null, mapDispatchToProps)(CheckoutItem);
