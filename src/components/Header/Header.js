import React from "react";
import logo from '../../images/logo.png';
import Button from "../Button/Button";
import './Header.css';

export const Header = () => {
   return (
      <header className="nav-container">
        <div className="logo-and-title">
          <img src={ logo } alt="logo" className="logo-tech"/>
          <h4 className="title-tech">OptimusTech</h4>
        </div>
        <nav className="nav-links">
          <div>
            <a href="/">Home</a>
            <a href="/">Produtos</a>
            <a href="/">Recursos</a>
            <a href="/">Sobre nós</a>
          </div>
          <div>
            <a href="/" className="link-login">Entrar</a>
            <Button>Cadastrar</Button>
          </div>
        </nav>
      </header>
    )
};