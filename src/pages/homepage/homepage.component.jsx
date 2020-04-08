import React from "react";
import "./homepage.styles.scss";
import ShopDirectory from "../../components/shop-directory/shop-directory.component";

const HomePage = (props) => {
  return (
    <div className="homepage">
      <ShopDirectory />
    </div>
  );
};

export default HomePage;
