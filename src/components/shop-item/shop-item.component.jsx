import React from "react";
import { connect } from "react-redux";

import FormButton from "../form-button/form-button.component";
import { addItem } from "../../redux/cart/cart.actions";

import "./shop-item.styles.scss";

const ShopItem = ({ item, addItem }) => {
  const { name, imageUrl, price } = item;
  return (
    <div className="shop-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="footer">
        <div className="name">{name}</div>
        <div className="price">${price}</div>
      </div>
      <FormButton onClick={() => addItem(item)} className="inverted">
        Add to cart
      </FormButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(ShopItem);
