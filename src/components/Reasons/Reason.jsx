import React from "react";
import "./Reason.css";
import ReasonImg1 from "../../assets/images-6.jpeg";
import ReasonImg2 from "../../assets/images-7.jpeg";
import ReasonImg3 from "../../assets/images-8.jpeg";
import Tick from "../../assets/tick.png";

const Reason = () => {
  return (
    <div className="Reasons" id="reasons">
      <div className="left-r">
        <img src={ReasonImg1} alt="resaon-img-1"></img>
        <img src={ReasonImg3} alt="resaon-img-1"></img>
        <img src={ReasonImg2} alt="resaon-img-1"></img>
        <img src={ReasonImg2} alt="resaon-img-1"></img>
      </div>
      <div className="right-r">
        <span>some reasons</span>
        <div>
          <span className="stroke-text ">why</span>
          <span>Choose us?</span>
        </div>
        <div className="details-r">
          <div>
            <img src={Tick} alt="tickImg"></img>
            <span>Reason 1</span>
          </div>
          <div>
            <img src={Tick} alt="tickImg"></img>

            <span>Reason 2</span>
          </div>
          <div>
            <img src={Tick} alt="tickImg"></img>

            <span>Reason 3</span>
          </div>
          <div>
            <img src={Tick} alt="tickImg"></img>

            <span>Reason 4</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reason;
