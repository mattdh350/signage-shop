import React from "react";
import "./form-button.styles.scss";

const FormButton = ({ children, classNames, ...otherProps }) => {
  return (
    <button
      className={`${classNames ? classNames : ""} form-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default FormButton;
