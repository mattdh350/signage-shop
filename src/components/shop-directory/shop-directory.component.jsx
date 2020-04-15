import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import ShopDirectoryMenuItem from "../shop-directory-menu-item/shop-directory-menu-item.component";
import { selectShopDirectoryCategories } from "../../redux/shop-directory/shop-directory.selectors";
import "./shop-directory.styles.scss";

const ShopDirectory = ({ categories }) => {
  return (
    <div className="directory">
      {categories.map(({ id, ...otherCategoryProps }) => (
        <ShopDirectoryMenuItem key={id} {...otherCategoryProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  categories: selectShopDirectoryCategories,
});

export default connect(mapStateToProps)(ShopDirectory);
