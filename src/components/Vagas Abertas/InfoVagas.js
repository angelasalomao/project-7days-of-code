import React from "react";
import './InfoVagas.css';

export const InfoVagas = ({ office, hours, remuneration }) => {
  return (
    <article className="work-details">
      <div className="about-details">
        <span className="work-name">{office}</span>
        <div>
          <span className="office-hours">{hours}</span>
          <span className="work-remuneration">{remuneration}</span>
        </div>
      </div>
    </article>
  )
}