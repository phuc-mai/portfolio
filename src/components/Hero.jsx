import React from "react";
import TechStack from "./TechStack";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-main">
          <div className="hero-overall">
            <div className="hero-text">
              <h1>
              Full-stack / Web <br /> Developer{" "}
                <span>
                  <img src="assets/wave hand.png" alt="hand"/>
                </span>
              </h1>
              <p>
                Hi, I'm Phuc Mai (Maria). A passionate Full-stack Web Developer and a Youtuber love sharing coding with "Code With Phuc" channel
              </p>
              <div className="profile-links">
                <a href="https://github.com/phuc-mai">
                  <i class="fa-brands fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/phuc-mai-1309/">
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
