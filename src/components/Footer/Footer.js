import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="contributors">
        <h3>CONTRIBUTORS</h3>
      </div>
      <div className="contributors-names-container">
        <div className="contributors-names">
          <h3>Lauren Black</h3>
          <a href="https://github.com/LaurenBlack5280">GitHub</a>
          <a href="https://www.linkedin.com/in/laurenblack5280/">LinkedIn</a>
        </div>
        <div className="contributors-names">
          <h3>Dani Lopez-Cruz</h3>
          <a href="https://github.com/BertoCruz">GitHub</a>
          <a href="https://www.linkedin.com/in/roberto-dani-lopez-cruz-84a03989/">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
