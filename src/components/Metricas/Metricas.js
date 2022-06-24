import React from "react";
import './Metricas.css';

export const Metricas = ({ quantity, title, info }) => {
  return (
    <article className="secao-metricas">
      <h1 className="quantity-metricas">{quantity}</h1>
      <h2 className="title-metricas">{title}</h2>
      <p className="info-metricas">{info}</p>
    </article>
  )
}