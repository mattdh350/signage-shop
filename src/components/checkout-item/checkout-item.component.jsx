import React from "react";
import { connect } from "react-redux";

import {
  addItem,
  removeItem,
  decreaseItemQuantity,
} from "../../redux/cart/cart.actions";

import "./checkout-item.styles.scss";

const CheckoutItem = ({
  item,
  removeItemFromCart,
  addItemToCart,
  decreaseCartItemQuantity,
}) => {
  const { id, imageUrl, name, price, quantity } = item;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => decreaseCartItemQuantity(item)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItemToCart(item)}>
          &#10095;
        </div>
      </span>
      <span className="price">${price}</span>
      <div className="remove-button" onClick={() => removeItemFromCart(id)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeItemFromCart: (itemId) => dispatch(removeItem(itemId)),
  addItemToCart: (item) => dispatch(addItem(item)),
  decreaseCartItemQuantity: (item) => dispatch(decreaseItemQuantity(item)),
});
export default connect(null, mapDispatchToProps)(CheckoutItem);
