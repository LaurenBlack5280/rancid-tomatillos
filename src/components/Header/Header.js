import React, { useState } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 300) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <header className={color ? "header header-background" : "header"}>
      <div>
        <NavLink exact to="/">
          <div className="rancid-home">
            <h1>Rancid Tomatillos</h1>
          </div>
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
