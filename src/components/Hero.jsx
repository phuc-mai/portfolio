import React from "react";
import { Link } from "react-router-dom";

import TechStack from "./TechStack";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-main">
          <div className="hero-overall">
            <div className="hero-text">
              <h1>
                Front-End React <br /> Developer{" "}
                <span>
                  <img src="assets/wave hand.png" />
                </span>
              </h1>
              <p>
                Hi, I'm Phuc Mai (Maria). A passionate Front-end React Developer
                based in Toronto, Canada
              </p>
              <div className="profile-links">
                <a href="">
                  <i class="fa-brands fa-github"></i>
                </a>
                <a href="https://github.com/phuc-mai">
                  <i class="fa-brands fa-linkedin"></i>
                </a>
              </div>
            </div>
            <img src="assets/profile.png" alt="profile" />
          </div>

          <TechStack />
        </div>
      </div>
    </section>
  );
};

export default Hero;
