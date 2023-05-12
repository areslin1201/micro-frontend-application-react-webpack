import React from "react";
import "./styles.css";

const Button = ({ handleClick, value }) => {
  return (
    <button className="button" onClick={handleClick}>{value}</button>
  )
}

export default Button;