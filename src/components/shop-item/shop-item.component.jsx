import React from "react";

import FormButton from "../form-button/form-button.component";

import "./shop-item.styles.scss";

const ShopItem = ({ id, name, imageUrl, price }) => {
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
      <FormButton className="inverted">Add to cart</FormButton>
    </div>
  );
};

export default ShopItem;
