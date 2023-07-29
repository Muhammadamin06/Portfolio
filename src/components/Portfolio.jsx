import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import website from "../images/website.png";
import product from "../images/product.png";
import app from "../images/app.png";
import dash from "../images/dashboard.png";

function Portfolio() {
  return (
    <section className="portfolio container">
      <h6 className="portfolio__title">Featured My Portfolio</h6>
      <p className="portfolio__description">
        Explore some of my latest website projects. Non suscipit ex blandit
        vitae. Pellentesque vel urna id massa sagittis luctus Fusce iaculis.
      </p>
      <div className="portfolio__block">
        <div className="portfolio__box">
          <img src={website} alt="pic of website" className="portfolio__img" />
          <p className="portfolio__theme">Website Design</p>
          <p className="portfolio__text">
            Our website designers have penetrated the mysteries of emotional
            response to color, image, and eye-tracking. Every element is geared
            to create maximum appeal.
          </p>
          <button className="portfolio__read">
            Read Case Study 
            <BsArrowRightShort />
          </button>
        </div>
        <div className="portfolio__box">
          <img src={product} alt="product design" className="portfolio__img" />
          <p className="portfolio__theme">Product Design</p>
          <p className="portfolio__text">
            Our Product designers have penetrated the mysteries of emotional
            response to color, image, and eye-tracking. Every element is geared
            to create maximum appeal.
          </p>
          <button className="portfolio__read">
            Read Case Study
            <span>
              <BsArrowRightShort />
            </span>
          </button>
        </div>
        <div className="portfolio__box">
          <img src={app} alt="app design" className="portfolio__img" />
          <p className="portfolio__theme">App Design</p>
          <p className="portfolio__text">
            Our App designers have penetrated the mysteries of emotional
            response to color, image, and eye-tracking. Every element is geared
            to create maximum appeal.
          </p>
          <button className="portfolio__read">
            Read Case Study
            <span>
              <BsArrowRightShort />
            </span>
          </button>
        </div>
        <div className="portfolio__box">
          <img src={dash} alt="DashBoard Design" className="portfolio__img" />
          <p className="portfolio__theme">DashBoard Design</p>
          <p className="portfolio__text">
            Our Dashboard designers have penetrated the mysteries of emotional
            response to color, image, and eye-tracking. Every element is geared
            to create maximum appeal.
          </p>
          <button className="portfolio__read">
            Read Case Study
            <span>
              <BsArrowRightShort />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
