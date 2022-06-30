import React from "react";
import './InfoVagas.css';

export const InfoVagas = ({ office, hours, remuneration }) => {
  return (
    <article className="work-details">
      <div className="about-details">
        <h1 className="work-name">{office}</h1>
        <div>
          <span className="office-hours">{hours}</span>
          <span className="work-remuneration">{remuneration}</span>
        </div>
      </div>
    </article>
  )
}