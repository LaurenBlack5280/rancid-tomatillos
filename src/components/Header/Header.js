import React, { useState } from "react";
import "./Header.css";

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
        <h1>Rancid Tomatillos</h1>
      </div>
    </header>
  );
};

export default Header;
