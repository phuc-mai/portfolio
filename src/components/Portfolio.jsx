import React from "react";

const Portfolio = () => {
  return (
    <section className="portfolio">
      <div className="container">
        <h3>PORTFOLIO</h3>
        <h1>Each project is a unique piece of development</h1>
        <div className="all-projects">
          <div className="project">
            <div className="project-img">
              <a href="https://motorbike-rental.netlify.app/">
                <img
                  src="assets/Motorbike Rental.png"
                  alt="motor-rental"
                />
              </a>
            </div>
            <div className="project-text">
              <h3>MOTORBIKE RENTAL</h3>
              <p className="project-desc">
                A car rental website is an online platform that allows users to
                rent cars for personal or business use. The website provides an
                interface for searching, comparing, and reserving cars.
              </p>
              <div className="project-stack">
                <p>React</p>
                <p>CSS</p>
                <p>Javascript</p>
              </div>
              <div className="project-links">
                <a href="https://github.com/phuc-mai/Motorbike-Rental">
                  Code
                  <i class="fa-brands fa-github"></i>
                </a>
                <a href="https://motorbike-rental.netlify.app/">
                  Live Demo
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="project-reverse">
            <div className="project-text">
              <h3>FITFINITY GYM CENTER</h3>
              <p className="project-desc">
                A gym website is a comprehensive resource for fitness
                information, class schedules, membership options, and tools to
                help users achieve their fitness goals.
              </p>
              <div className="project-stack">
                <p>React</p>
                <p>CSS</p>
                <p>Javascript</p>
              </div>
              <div className="project-links">
                <a href="https://github.com/phuc-mai/Motorbike-Rental">
                  Code
                  <i class="fa-brands fa-github"></i>
                </a>
                <a href="https://motorbike-rental.netlify.app/">
                  Live Demo
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
            <div className="project-img">
              <a href="https://fitfinity-gym-center.netlify.app/">
                <img src="assets/Fitfinity.png" alt="fitfinity-gym-center" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
