import React from "react";
import './Depoimentos.css';
import avatar from '../../images/Avatar.png';

export const Depoimentos = () => {
  return(
    <article className="testimony-section">
      <div className="about-div">
        <span className="about-testimony">Veja o que nossos colaboradores falam sobre nós</span>
        <h1 className="health-title">OptimusTech se importa com a saúde dos seus colaboradores e sempre procura nos dar todo tipo de auxílio possível.</h1>
        <img src={avatar} alt="avatar" className="avatar-testimony"/>
        <span className="name-testimony">Júlia Castro</span>
        <span className="office">Desenvolvedora Web</span>
      </div>
    </article>
  )
}