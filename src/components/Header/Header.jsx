import React from "react";
import Logo from "../../assets/Armaan.png";
import Bars from "../../assets/bars.png";
import { useState, useEffect } from "react";
import Logo2 from "../../assets/LOGO@.png";
import { Link } from "react-router-dom";

import "./Header.css";
const Header = () => {
  const Mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className="header" id="header">
      <img src={Logo2} className="logo" alt="logo" />
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
          <li onClick={() => setMenuOpened(false)}>
            {" "}
            <a href="#hero" span="true" smooth="true">
              HERO
            </a>
          </li>
          <li onClick={() => setMenuOpened(false)}>
            <a href="#programs" span="true" smooth="true">
              PROGRAMS
            </a>
          </li>
          <li onClick={() => setMenuOpened(false)}>
            {" "}
            <a href="#reasons" span="true" smooth="true">
              Why us?
            </a>
          </li>

          <li onClick={() => setMenuOpened(false)}>
            <a href="#testimonials" span="true" smooth="true">
              Testimonials
            </a>
          </li>
          <li onClick={() => setMenuOpened(false)}>
            <a href="#footer" span="true" smooth="true">
              Contact us
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
