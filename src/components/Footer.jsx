import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { BiLogoLinkedin } from "react-icons/bi";
import logo from "../images/logo-black.png";

function Footer() {
  return (
    <footer className="footer container">
      <div>
        <a className="footer__logo" href="#!">
          <img src={logo} alt="logo" />
          <span>P.</span>
        </a>
        <p className="footer__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus mattis
          nunc aliquam tincidunt est non.
        </p>
        <div className="footer__media">
          <a href="#!" className="footer__social">
            <FaFacebookF />
          </a>
          <a href="#!" className="footer__social">
            <BsInstagram />
          </a>
          <a href="#!" className="footer__social">
            <BsTwitter />
          </a>
          <a href="#!" className="footer__social">
            <BiLogoLinkedin />
          </a>
        </div>
      </div>
      <div className="footer__pages">
        <p className="footer__title">Pages</p>
        <div className="footer__list">
          <a href="#!" className="footer__link">
            Home
          </a>
          <a href="#!" className="footer__link">
            About
          </a>
          <a href="#!" className="footer__link">
            Service
          </a>
          <a href="#!" className="footer__link">
            Portfolio
          </a>
          <a href="#!" className="footer__link">
            Blog
          </a>
        </div>
      </div>
      <div className="services">
        <p className="footer__title">Services</p>
        <div className="footer__list">
          <a href="#!" className="footer__link">
            Web Design
          </a>
          <a href="#!" className="footer__link">
            App Design
          </a>
          <a href="#!" className="footer__link">
            Dashboard
          </a>
          <a href="#!" className="footer__link">
            Illustration
          </a>
          <a href="#!" className="footer__link">
            Development
          </a>
        </div>
      </div>
      <div className="contact">
        <p className="footer__title">Contact</p>
        <div className="footer__list">
          <a href="tel:+998991234567" className="footer__info">
            +00 88 999 888 22
          </a>
          <a href="mailto:example@gmail.com" className="footer__info">
            example@gmail.com
          </a>
          <a href="#!" className="footer__info">
            www.portfolio.com
          </a>
          <a href="#!" className="footer__info">
            44, Housing State, 3200
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
