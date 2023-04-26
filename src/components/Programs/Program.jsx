import React from "react";
import "./Program.css";
import Rightarrow from "../../assets/rightArrow.png";
import { programsData } from "../../data/Programs/programsData";

const Program = () => {
  return (
    <div className="Programs" id="programs">
      <div className="programs-header">
        <span className="stroke-text">Explore our</span>
        <span>Facilities</span>
        <span className="stroke-text">Accordingly</span>
      </div>

      <div className="program-categories">
        {programsData.map((program, index) => {
          return (
            <div className="category" key={index}>
              <span className="program-image">{program.image}</span>

              <span>{program.heading}</span>
              <span>{program.details}</span>
              <div className="join-now">
                <span>Click here</span>
                <img src={Rightarrow} alt="right-arrow-img"></img>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Program;
