import React from "react";
import { connect } from "react-redux";
import ShopCategoryPreview from "../../components/shop-category-preview/shop-category-preview.component";
import { createStructuredSelector } from "reselect";
import { selectShopCategories } from "../../redux/shop/shop.selectors";
import "./shop.styles.scss";

const ShopPage = ({ categories }) => {
  return (
    <div className="shop-page">
      {categories.map(({ id, ...otherCategoryProps }) => (
        <ShopCategoryPreview key={id} {...otherCategoryProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  categories: selectShopCategories,
});

export default connect(mapStateToProps)(ShopPage);
