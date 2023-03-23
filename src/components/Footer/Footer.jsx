import React from "react";
import "./footer.css";
import Instagram from "../../assets/instagram.png";
import Github from "../../assets/github.png";
import LinkedIn from "../../assets/linkedin.png";
import Logo from "../../assets/06e8cf5a-d252-464c-9a73-2bb773e98482-removebg-preview.png";
const Footer = () => {
  return (
    <div className="footer-container">
      <hr />
      <div className="footer">
        <div className="social-links">
          <img src={Github} alt="githubImg"></img>
          <img src={LinkedIn} alt="LinkedInImg"></img>
          <img src={Instagram} alt="InstagramImg"></img>
        </div>
        <div className="logo-f">
          <img src={Logo} alt="LogoImg"></img>
        </div>
      </div>

      <div className="blur footer-blur-1"></div>
      <div className="blur footer-blur-2"></div>
    </div>
  );
};

export default Footer;
