import React from "react";
import "./homepage.styles.scss";

const HomePage = (props) => {
  return (
    <div className="homepage">
      <div className="directory-menu">
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Samsung Signage Displays</h1>
            <span className="subtitle">
              Smart Signage Displays Powered by Tizen
            </span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">LG Signage Displays</h1>
            <span className="subtitle">
              Smart Signage Displays Powered by WebOS
            </span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Brightsign Signage Products</h1>
            <span className="subtitle">
              Cost-effective and reliable Signage devices
            </span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Certified Signage Windows PCs</h1>
            <span className="subtitle">
              Dediciated Windows devices certfied for Signage use-cases
            </span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Signage CMS Bundles</h1>
            <span className="subtitle">
              Cost-effective and reliable Signage devices
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
