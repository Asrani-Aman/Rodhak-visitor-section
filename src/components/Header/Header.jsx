import React from "react";
import Logo from "../../assets/Armaan.png";
import Bars from "../../assets/bars.png";
import { useState } from "react";
import "./Header.css";
const Header = () => {
  const Mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className="header">
      <img src={Logo} className="logo" alt="logo" />
      {menuOpened === false && Mobile === true ? (
        <div onClick={() => setMenuOpened(true)}>
          <img
            src={Bars}
            alt="barsImg "
            style={{ width: "1.5rem", height: "1.5rem" }}
          ></img>
        </div>
      ) : (
        <ul className="header-menu">
          <li onClick={() => setMenuOpened(false)}>Home</li>
          <li onClick={() => setMenuOpened(false)}>Programs</li>
          <li onClick={() => setMenuOpened(false)}>Why us</li>
          <li onClick={() => setMenuOpened(false)}>Plans</li>
          <li onClick={() => setMenuOpened(false)}>Testimonial</li>
        </ul>
      )}
    </div>
  );
};

export default Header;
