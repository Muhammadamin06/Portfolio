import React from "react";
import { TypeAnimation } from 'react-type-animation';
import bg from "../images/header__bg.png";
import pic from '../images/small pic.svg'

function Intro() {
  return (
    <div id="intro" className="intro container">
      <div className="intro__info">
        <TypeAnimation
        sequence={["Hey, I'm Musa"]}
        speed={1}
        className="intro__head"
        />
        <h2 className="intro__title">
          Building Digital Products, Brands & Experience.
        </h2>
        <p className="intro__text">
          A Product Design and Visual Designer in SF I”m Specialize in UI/UX,
          Responsive web design, and visual Development.{" "}
        </p>
        <div className="intro__buttons">
          <button className="intro__btn-hire">Hire Me</button>
          <button className="intro__btn-work">My Work</button>
        </div>
      </div>
      <div className="intro__other">
        <img src={bg} alt="bg" className="intro__img" />
        <div className="intro__comment">
          <p className="intro__comment-text">
            ''Musa has benn an outstanding contributor to our team's UI Designer
            needs highly recommened''
          </p>
          <div className="intro__comment-box">
            <img src={pic} alt="small picture of commentator" className="intro__comment-pic" />
            <div className="intro__comment-mini">
            <p className="intro__comment-info">Jason Holder</p>
            <p className="intro__comment-job">UX Designer at Futura</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
