import React from "react";
import "./Header.css";

const Header = ({ randomMovie }) => {
  return (
    <header
      // style={{
      //   backgroundImage: `url(${randomMovie.backdrop_path})`,
      // }}
    >
      <div>
        <h1>Rancid Tomatillos</h1>
      </div>
    </header>
  );
};

export default Header;
