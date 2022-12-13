import React from "react";
import "./Hero.css";

const Hero = ({ randomMovie }) => {

  return (
    <div
      className="hero-container"
      style={{
        backgroundImage: `url(${randomMovie.backdrop_path})`,
      }}
    >
      <div className="hero-content"></div>
    </div>
  );
};

export default Hero;
