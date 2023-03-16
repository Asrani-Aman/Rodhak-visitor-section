import React from "react";
import Logo from "../../assets/06e8cf5a-d252-464c-9a73-2bb773e98482-removebg-preview.png";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <img src={Logo} className="logo" alt="logo" />
      <ul className="header-menu">
        <li>Home</li>
        <li>Programs</li>
        <li>Why us</li>
        <li>Plans</li>
        <li>Testimonials</li>
      </ul>
    </div>
  );
};

export default Header;
