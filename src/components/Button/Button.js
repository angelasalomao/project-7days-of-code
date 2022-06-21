import React from "react";
import './Button.css'

class Button extends React.Component {
  render() {
    const { content } = this.props;
    return (    
      <button type="button" className="btn-cadastro">{content}</button>
    )
  }
}

export default Button;