import React from "react";
import "./IconButton.css";

const IconButton = (props) => {
  return (
    <button className="icon-button">
      <span className="icon">{props.buttonIcon}</span>
    </button>
  );
};

export default IconButton;
