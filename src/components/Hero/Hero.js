import React from "react";
import "./Hero.css";
import rancidMeter from "../../images/rancidMeter.png";

const Hero = ({ randomMovie }) => {
  return (
    <div
      className="hero-container"
      style={{
        backgroundImage: `url(${randomMovie.backdrop_path})`,
      }}
    >
      <div className="hero-content">
        <div className="hero-movie-info">
          <h2>{randomMovie.title}</h2>
          <p className="hero-release-date">{randomMovie.release_date}</p>
          <div className="rancid-meter-hero">
            <div className="rancid-meter-hero-container">
              <img src={rancidMeter}></img>
            </div>
            <p className="rancid-meter-hero-rating">
              <span className="rr-1">Rancid Rating</span>
              <span className="rr-2">{randomMovie.average_rating}/10</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
