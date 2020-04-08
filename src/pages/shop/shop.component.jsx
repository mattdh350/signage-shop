import React, { Component } from "react";
import ShopCategoryPreview from "../../components/shop-category-preview/shop-category-preview.component";
import SHOP_DATA from "./shop.data";

class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: SHOP_DATA,
    };
  }
  render() {
    const { categories } = this.state;
    return (
      <div className="shop-page">
        {categories.map(({ id, ...otherCategoryProps }) => (
          <ShopCategoryPreview key={id} {...otherCategoryProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
