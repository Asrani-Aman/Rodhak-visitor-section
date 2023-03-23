import React from "react";
import Logo from "../../assets/06e8cf5a-d252-464c-9a73-2bb773e98482-removebg-preview.png";
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
          <li onClick={() => setMenuOpened(false)}>
            <a href="testimonials">Testimonials</a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
