import React, { useState } from "react";
import "./Header.css";
import { NavLink } from 'react-router-dom'

const Header = () => {
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if ((window.scrollY >= 300)) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor)

  return (
    <header className={color ? "header header-background" : "header"}>
      <div>
        <NavLink exact to="/"><h1>Rancid Tomatillos</h1></NavLink>

      </div>
    </header>
  );
};

export default Header;
