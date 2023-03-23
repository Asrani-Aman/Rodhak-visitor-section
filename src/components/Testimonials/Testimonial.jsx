import React from "react";
import { useState } from "react";
import "./Tesitimonial.css";
import { testimonialsData } from "../../data/testimonialsData";
import Rightarrow from "../../assets/rightArrow.png";
import Leftarrow from "../../assets/leftArrow.png";
import { motion } from "framer-motion";

const Testimonial = () => {
  const [selected, setSelected] = useState(0);
  const transition = { type: "spring", duration: 3 };

  return (
    <div>
      <div className="testimonials" id="testimonials">
        <div className="left-t">
          <span>Testimonial</span>
          <span className="stroke-text">What They </span>
          <span>Say About us?</span>
          <motion.span
            key={selected}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={transition}
          >
            {" "}
            {testimonialsData[selected].review}
          </motion.span>
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
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            transition={{ ...transition, duration: 2 }}
            whileInView={{ opacity: 1, x: 0 }}
          ></motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            transition={{ ...transition, duration: 2 }}
            whileInView={{ opacity: 1, x: 0 }}
          ></motion.div>

          <motion.img
            key={selected}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={transition}
            src={testimonialsData[selected].image}
            alt="testImage"
          ></motion.img>
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
