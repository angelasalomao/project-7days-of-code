import React from "react";
import './Button.css'

const Button = ({ children }) => {
  return (    
    <button type="button" className="btn-component">{children}</button>
  )
};

export default Button;