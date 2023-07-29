import React from "react";

function Statistic() {
  return (
    <div className="stats">
      <h3 className="stats__title">STATISTIC</h3>
      <div className="stats__block">
        <div className="stats__box">
          <p className="stats__num">300+</p>
          <p className="stats__text">Project Delivery</p>
        </div>
        <div className="stats__box">
          <p className="stats__num">8</p>
          <p className="stats__text">Years Experience</p>
        </div>
        <div className="stats__box">
          <p className="stats__num">16</p>
          <p className="stats__text">Awards</p>
        </div>
        <div className="stats__box">
          <p className="stats__num">70+</p>
          <p className="stats__text">Happy Clients</p>
        </div>
      </div>
    </div>
  );
}

export default Statistic;
