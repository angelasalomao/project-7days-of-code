import React from "react";
import './Formulario.css';
import Button from "../Button/Button";

export const Formulario = () => {
  return(
    <footer className="footer-form">
      <form className="form-section">
        <h3 className="title-form">Acompanhe as nossas oportunidades</h3>
        <span className="info-form">Seja o primeiro a saber quando novas vagas serão abertas!</span>
        <div>
        <input
          type="text"
          placeholder="Seu e-mail"
          className="email-form"
        />
        <Button>Cadastrar</Button>
        </div>
      </form>
      <span className="footer-text">© 2022 OptimusTech. Todos os direitos reservados.</span>
    </footer>
  )
}