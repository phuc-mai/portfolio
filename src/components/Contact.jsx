import React from "react";

const Contact = () => {
  return (
    <section className="contact" id="contact"> 
      <div className="container">
        <h1>Contact Me</h1>
        <p>
          Want to have amazing projects! Hit me up
          <i class="fa-regular fa-hand-point-down"></i>
        </p>
        <div className="contact-info">
          <div className="contact-details">
            <img src="assets/email.png" />
            <a href="mailto:mariamaihong1309@gmail.com">
              mariamaihong1309@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
