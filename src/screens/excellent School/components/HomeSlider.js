import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Image } from "semantic-ui-react";
// import schooolImg1 from "../assets/image/school_img1.jpg";
import schooolImg1 from "../../../assets/images/school_img1.jpg"
import schooolImg2 from "../../../assets/images/school_img2.webp";
import schooolImg3 from "../../../assets/images/school_img3.webp";
import 'semantic-ui-css/semantic.min.css'

const HomeSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,

  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          <Image src={schooolImg1} />
        </div>
        <div>
          <Image src={schooolImg2} />
        </div>
        <div>
          <Image src={schooolImg3} />
        </div>
      </Slider>
    </div>
  );

};

export default HomeSlider;
