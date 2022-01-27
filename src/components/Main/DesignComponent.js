import { useState } from "react";
import Slider from "react-slick";
import bumpers from "../../images/home/3x3_descent.png";
import freecs from "../../images/home/3x3_afreeca.png";
import esports from "../../images/home/afreeca_freecs.png";
import ansan from "../../images/home/ansan_baseball.png";
import kta from "../../images/home/kta_uniform.png";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "../../css/design.css";

const images = [bumpers, freecs, esports, ansan, kta];

function DesignComponent() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="slide-container">
      <div className="slide-wrap">
        <Slider {...settings}>
          {images.map((img, idx) => (
            <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
              <img className="slide-img" src={img} alt={img} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default DesignComponent;
