import React from "react";
import "./form-button.styles.scss";

const FormButton = ({ children, className, ...otherProps }) => {
  return (
    <button
      className={`${className ? className : ""} form-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default FormButton;
