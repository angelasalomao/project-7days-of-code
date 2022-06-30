import React from "react";
import image from '../../images/Image.png';
import { InfoVagas } from "../Vagas Abertas/InfoVagas";
import './Vagas.css';

export const Vagas = () => {
  return (
    <section className="vagas-container">
      <span className="span-vagas">Vagas abertas!</span>
      <h2 className="title-vagas">Estamos procurando por talentos</h2>
      <p className="about-work">Somos uma equipe 100% remota com pessoas do Brasil inteiro.</p>
      <img src={ image } alt="working" className="img-work"/>
      <div>
      <h3 className="title-area">Design</h3>
      <InfoVagas
        office="Product Designer"
        hours="Full-time "
        remuneration="Faixa salarial: R$7.000"
      />
       <InfoVagas
        office="UX Designer"
        hours="Full-time "
        remuneration="Faixa salarial: R$6.000"
      />
      <h3 className="title-area">Desenvolvimento de Software</h3>
       <InfoVagas
        office="Desenvolvedor(a) iOS"
        hours="Full-time "
        remuneration="Faixa salarial: R$8.000"
      />
      <InfoVagas
        office="Desenvolvedor(a) Front-end"
        hours="Full-time "
        remuneration="Faixa salarial: R$7.000"
      />
      <InfoVagas
        office="Desenvolvedor(a) Back-end"
        hours="Full-time "
        remuneration="Faixa salarial: R$8.000"
      />
      </div>
    </section>
  )
}