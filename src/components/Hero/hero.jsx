import React from "react";
import Header from "../Header/Header";
import "./hero.css";
import TrackingIcon from "../../assets/TrackingIcon.png";
import Logo from "../../assets/Armaan.png";
import HeroImageBack from "../../assets/hero_image_back.png";
import { motion } from "framer-motion";
import NumberCounter from "number-counter";
import LOGO2 from "../../assets/LOGO@.png";
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
            <span>My Bus</span>
          </div>
          <div>
            <span>
              TBoard your bus comfortably without a hassle and share the journey
              link with your loved ones to give them a peace of mind{" "}
            </span>
          </div>
          <div>
            <span>
              HimRaahi (formerly D'n'D Rodhak) is a budding startup based in
              Himachal Pradesh striving to make roads safer for everyone by
              inculcating healthy driving practices among drivers. We offer
              control to the vehicle fleet owners and safeguard their assets and
              resources to maximize their profits.
            </span>
          </div>
        </div>

        {/* figures */}
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={150} start={100} delay="5" preFix="+" />
            </span>
            <span>Transport Comapnies</span>
          </div>
          <div>
            <span>
              <NumberCounter end={550} start={400} delay="5" preFix="+" />
            </span>
            <span>Buses & Trucks</span>
          </div>
          <div>
            <span>
              <NumberCounter end={1550} start={1400} delay="5" preFix="+" />
            </span>
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

        <img src={LOGO2} alt="heroimage" className="hero-image"></img>
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
