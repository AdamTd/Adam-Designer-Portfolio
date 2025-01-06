import React, { useState } from "react";
import slide_1 from "../assets/images/image-slide-1.jpg";
import slide_2 from "../assets/images/image-slide-2.jpg";
import slide_3 from "../assets/images/image-slide-3.jpg";
import slide_4 from "../assets/images/image-slide-4.jpg";
import slide_5 from "../assets/images/image-slide-5.jpg";
import right_icon from "../assets/icons/icon-arrow-right.svg";
import left_icon from "../assets/icons/icon-arrow-left.svg";

const slide = [slide_1, slide_2, slide_3, slide_4, slide_5];

function Work() {
  const [currentSlide, setCurrentSlide] = useState(0);
  function nextSlide() {
    if (currentSlide < slide.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  }
  function prevSlide() {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  }
  return (
    <>
      <div className="work">
        <h2>My Work</h2>
        <img src={slide[currentSlide]} alt="slide_1" className="work__img" />
        <div className="work__btn">
          <button className="btn" onClick={prevSlide}>
            <img src={left_icon} alt="left_icon" />
          </button>
          <button className="btn" onClick={nextSlide}>
            <img src={right_icon} alt="right_icon" />
          </button>
        </div>
      </div>
    </>
  );
}
export default Work;
