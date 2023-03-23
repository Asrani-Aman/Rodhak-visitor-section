import React from "react";
import Header from "../Header/Header";
import "./hero.css";
import TrackingIcon from "../../assets/TrackingIcon.png";
import HeroImage from "../../assets/06e8cf5a-d252-464c-9a73-2bb773e98482-removebg-preview.png";
import HeroImageBack from "../../assets/hero_image_back.png";
import { motion } from "framer-motion";

const Hero = () => {
  const transition = { type: "spring", duration: 2.5 };
  const mobile = window.innerWidth <= 768 ? true : false;

  return (
    <div className="hero">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />

        {/* the best ad */}
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? "100px" : "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>The best Tracking App</span>
        </div>

        {/* hero headind */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Track </span>
            <span>Your</span>
          </div>
          <div>
            <span>Vechile/Bus </span>
          </div>
          <div>
            <span>
              D'n'D Rodhak is a budding start-up striving to make roads safer
              for everyone. We aim to deliver smart user-friendly products that
              understand several dimensions of driver's behaviour, especially
              accounting for one's inebriated or sleepy state, to ensure
              driver's physical and mental capacity to drive, by leveraging
              state-of-the-art technologies such as the internet of things and
              artificial intelligence.
            </span>
          </div>
        </div>

        {/* figures */}
        <div className="figures">
          <div>
            <span>14+</span>
            <span>Transport Comapnies</span>
          </div>
          <div>
            <span>1.4k+</span>
            <span>Buses & Trucks</span>
          </div>
          <div>
            <span>2k+</span>
            <span>personal vechiles</span>
          </div>
        </div>
        {/* hero buttons */}

        <div className="hero-buttons">
          <buttons className="btn">Get Started</buttons>
          <buttons className="btn">Learn More</buttons>
        </div>
      </div>

      {/* RIGHT SIDE */}

      <div className="right-h">
        <button className="btn">Start for Free</button>
        <motion.div
          className="tracking-icon"
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
        >
          <img src={TrackingIcon} alt="tracking icon"></img>
          <span>Tracking</span>
        </motion.div>
        {/* hero images */}

        <img src={HeroImage} alt="heroimage" className="hero-image"></img>
        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          transition={transition}
          src={HeroImageBack}
          className="hero-image-back"
          alt="hero imageback"
        ></motion.img>
      </div>
    </div>
  );
};

export default Hero;
