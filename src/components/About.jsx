import React from "react";

const About = () => {
  return (
    <div className="container">
      <section className="about" id="about">
        <img src="assets/about.jpg" alt="profile"/>
        <div className="about-text">
          <h2>ABOUT ME</h2> 

          <h3>Front-end</h3>
          <p>
            Have hands-on experience with modern front-end technologies such
            as HTML, CSS, JavaScript, Material UI, Tailwind, and frameworks like ReactJS, NextJS, Typescript.
          </p>

          <h3>Back-end</h3>
          <p>
            Have been working on the server-side, handling databases, and
            building server logic using technologies like Next.js, Node.js and Express.js.
            Comfortable with RESTful API development and can work with
            databases like MongoDB and MySQL.
          </p>

          <h3>Full-Stack Proficiency</h3>
          <p>
            The goal is to bridge the gap between front-end and back-end
            development, ensuring seamless data flow and a delightful user
            experience. Being excited about the challenges of full-stack
            development and strive to create robust, efficient, and scalable
            applications.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
