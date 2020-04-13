import React from "react";
import "./shop-directory-menu-item.styles.scss";
import { withRouter } from "react-router-dom";

const ShopDirectoryMenuItem = ({
  title,
  subtitle,
  imageUrl,
  size,
  color,
  linkUrl,
  history,
  match,
}) => {
  return (
    <div
      className={`${size ? size : ""} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className={`${color} background-image`}
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">{subtitle}</span>
      </div>
    </div>
  );
};

export default withRouter(ShopDirectoryMenuItem);
