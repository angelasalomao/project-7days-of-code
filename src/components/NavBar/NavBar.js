import React from "react";
import logo from '../../images/logo.png';
import Button from "../Button/Button";
import './NavBar.css';

class NavBar extends React.Component {
  render() {
    return (
      <nav className="nav-container">
        <div className="logo-and-title">
        <img src={ logo } alt="logo" className="logo-tech"/>
        <h4 className="title-tech">OptimusTech</h4>
        </div>
        <div className="nav-links">
        <a href="/">Home</a>
        <a href="/">Produtos</a>
        <a href="/">Recursos</a>
        <a href="/">Sobre nós</a>
        </div>
        <div>
        <a href="/" className="link-login">Entrar</a>
        <Button content="Cadastrar" />
        </div>
      </nav>
    )
  }
}

export default NavBar;