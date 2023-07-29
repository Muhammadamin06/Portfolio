import React from "react";
import Carousel from "react-bootstrap/Carousel";
import pic from "../images/sectionbg.png";
import text from "../images/Group.png";

function About() {
  return (
    <section className="about">
      <img
        src={pic}
        alt="bussinesmann black suit makes montions"
        className="about__pic"
      />

      <div className="about__info">
        <Carousel>
          <Carousel.Item>
            <img className="about__symbol" src={text} alt="First slide" />
            <p className="about__text">
              Managed Services team acts like an extension of yours to expertly
              respond to any and all feedback, and scan and evaluate reviews for
              any legal concerns, profanity or slander, or any policy violations
              of{" "}
            </p>
            <p className="about__text" id="about__second-text">
              community and content. Services, analytics and reports can be
              customized by location, project or initiative.
            </p>
            <p className="about__job">Mohammad Musa - CEO at Company</p>
          </Carousel.Item>
          <Carousel.Item>
            <img className="about__symbol" src={text} alt="Second slide" />
            <p className="about__text">
              Managed Services team acts like an extension of yours to expertly
              respond to any and all feedback, and scan and evaluate reviews for
              any legal concerns, profanity or slander, or any policy violations
              of{" "}
            </p>
            <p className="about__text" id="about__second-text">
              community and content. Services, analytics and reports can be
              customized by location, project or initiative.
            </p>
            <p className="about__job">Mohammad Musa - CEO at Company</p>
          </Carousel.Item>
          <Carousel.Item>
            <img className="about__symbol" src={text} alt="Third slide" />
            <p className="about__text">
              Managed Services team acts like an extension of yours to expertly
              respond to any and all feedback, and scan and evaluate reviews for
              any legal concerns, profanity or slander, or any policy violations
              of{" "}
            </p>
            <p className="about__text" id="about__second-text">
              community and content. Services, analytics and reports can be
              customized by location, project or initiative.
            </p>
            <p className="about__job">Mohammad Musa - CEO at Company</p>
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
}

export default About;


