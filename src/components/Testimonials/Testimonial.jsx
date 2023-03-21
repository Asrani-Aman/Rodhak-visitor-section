import React from "react";
import { useState } from "react";
import "./Tesitimonial.css";
import { testimonialsData } from "../../data/testimonialsData";
import Rightarrow from "../../assets/rightArrow.png";
import Leftarrow from "../../assets/leftArrow.png";

const Testimonial = () => {
  const [selected, setSelected] = useState(0);
  return (
    <div>
      <div className="testimonials">
        <div className="left-t">
          <span>Testimonial</span>
          <span className="stroke-text">What They </span>
          <span>Say About us?</span>
          <span> {testimonialsData[selected].review}</span>
          <span>
            {" "}
            <span style={{ color: "#f48915" }}>
              {testimonialsData[selected].name}{" "}
            </span>
            -{"  "}
            {testimonialsData[selected].status}
          </span>
        </div>

        {/* Right side */}

        <div className="right-t">
          <div></div>
          <div></div>
          <img src={testimonialsData[selected].image} alt="testImage"></img>
          <div className="arrows">
            <img
              src={Leftarrow}
              alt="arrowImg"
              onClick={() => {
                selected === 0
                  ? setSelected(testimonialsData.length - 1)
                  : setSelected((prev) => prev - 1);
              }}
            ></img>
            <img
              src={Rightarrow}
              alt="arrowImg"
              onClick={() => {
                selected === testimonialsData.length - 1
                  ? setSelected(0)
                  : setSelected((prev) => prev + 1);
              }}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
