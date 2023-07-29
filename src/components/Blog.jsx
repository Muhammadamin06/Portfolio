import React from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import Carousel from "react-bootstrap/Carousel";
import pic from "../images/blog.png";

function Blog() {
  return (
    <div className="blog container">
      <div className="blog__info">
        <img src={pic} alt="picture" className="blog__pic" />
        <h7 className="blog__how">
          How This Agency Helped My Business And Career Journey?
        </h7>
        <p className="blog__text">
          A successful marketing plan relies heavily on the pulling-power of
          advertising copy. writing result-oriented ad copy is dificult, as it
          must appeal to, entice, and onviced consumers tp action.
        </p>
        <div className="blog__publish">
          <button>PUBLISHED IN</button>
          <button>Marketing</button>
          <button>Category</button>
          <p>05 jun, 2021</p>
        </div>
      </div>
      <div className="blog__news">
        <h8 className="blog__new">My Blog And News</h8>
        <p className="blog__desc">
          If It's abillboard ad, you'll need a super catchy headline due to the
          speed at which people will pass.
        </p>
        <button className="blog__button">Go To The Blog</button>
        <div className="blog__svgs">
          <AiOutlineArrowLeft />
          <AiOutlineArrowRight />
        </div>
      </div>
    </div>
  );
}

export default Blog;
