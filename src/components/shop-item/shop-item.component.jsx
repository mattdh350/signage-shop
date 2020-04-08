import React from "react";

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
    </div>
  );
};

export default ShopItem;
