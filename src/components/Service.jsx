import React from "react";
import { TypeAnimation } from 'react-type-animation'
import { AiOutlineEye } from "react-icons/ai";
import { LuAnchor, LuMonitor } from "react-icons/lu";

function Service() {
  return (
    <section id="service" className="service container">
      <div className="service__head">
      <TypeAnimation sequence={["Services"]} speed={1000} />
      </div>
      <h4 className="service__title">
        Building Digital Product With Better Experience
      </h4>
      <div className="service__block">
        <div className="service__box">
          <LuAnchor />
          <h5 className="service__aspect">UI/UX Design</h5>
          <p className="service__text">
            I've created a user interface and user experience with some proccess
            and method.
          </p>
        </div>
        <div className="service__box">
          <LuMonitor />
          <h5 className="service__aspect">Web Development</h5>
          <p className="service__text">
            I've created a user interface and user experience with some proccess
            and method.
          </p>
        </div>
        <div className="service__box">
          <AiOutlineEye />
          <h5 className="service__aspect">Visual Branding</h5>
          <p className="service__text">
            I've created a user interface and user experience with some proccess
            and method.
          </p>
        </div>
        <div className="service__box">
          <LuAnchor />
          <h5 className="service__aspect">App Development</h5>
          <p className="service__text">
            I've created a user interface and user experience with some proccess
            and method.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Service;
