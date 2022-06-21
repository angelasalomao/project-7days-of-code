import React from "react";
import logo from '../../images/logo.png';
import Button from "../Button/Button";
import './Header.css';

export const Header = () => {
   return (
      <header className="nav-container">
        <div className="logo-and-title">
          <img src={ logo } alt="logo" className="logo-tech"/>
          <span className="title-tech">OptimusTech</span>
        </div>
        <nav className="nav-links">
          <div>
            <a href="/" className="link-header">Home</a>
            <a href="/" className="link-header">Produtos</a>
            <a href="/" className="link-header">Recursos</a>
            <a href="/" className="link-header">Sobre nós</a>
          </div>
          <div>
            <a href="/" className="link-login">Entrar</a>
            <Button>Cadastrar</Button>
          </div>
        </nav>
      </header>
    )
};