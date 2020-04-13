import React from "react";
import ShopItem from "../shop-item/shop-item.component";

import "./shop-category-preview.styles.scss";

const ShopCategoryPreview = ({ title, color, items }) => {
  return (
    <div className={`shop-category-preview ${color}`}>
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items.slice(0, 4).map((item) => (
          <ShopItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ShopCategoryPreview;
