import React from "react";

const Portfolio = () => {
  return (
    <section className="portfolio" id="projects">
      <div className="container">
        <h3>PORTFOLIO</h3>
        <h1>Each project is a unique piece of development</h1>

        <div className="all-projects">
          <div className="project-reverse">
            <div className="project-text">
              <h3>SKY CHAT - CHAT APP</h3>
              <p className="project-desc">
                Sky chat allows user to create account, and search contacts and
                chat with other people in person or group in real-time
                messaging.
              </p>
              <div className="project-stack">
                <p>Next JS</p>
                <p>React</p>
                <p>Next Auth</p>
                <p>MongoDB</p>
                <p>Tailwind CSS</p>
                <p>Pusher</p>
              </div>
              <div className="project-links">
                <a href="https://github.com/phuc-mai/skychat" target="_blank">
                  Code
                  <i class="fa-brands fa-github"></i>
                </a>
                <a href="https://skychat-nine.vercel.app/" target="_blank">
                  Live Demo
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
            <div className="project-img">
              <a href="https://skychat-nine.vercel.app/" target="_blank">
                <img src="assets/skychat.png" alt="social media app" />
              </a>
            </div>
          </div>

          <div className="project">
            <div className="project-img">
              <a href="https://zingzone.vercel.app/" target="_blank">
                <img src="assets/filmhub.png" alt="social media app" />
              </a>
            </div>
            <div className="project-text">
              <h3>FILM HUB - MOVIE WEBSITE</h3>
              <p className="project-desc">
                Film Hub allows user to create account, watch or search trending
                movies with various genres. User can see all detailed
                information of movies and add to their favorite list.
              </p>
              <div className="project-stack">
                <p>Next JS</p>
                <p>React</p>
                <p>Next Auth</p>
                <p>MongoDB</p>
                <p>Tailwind CSS</p>
                <p>RESTful API</p>
              </div>
              <div className="project-links">
                <a href="https://github.com/phuc-mai/filmhub" target="_blank">
                  Code
                  <i class="fa-brands fa-github"></i>
                </a>
                <a href="https://filmhub.phucmai.com/" target="_blank">
                  Live Demo
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="project-reverse">
            <div className="project-text">
              <h3>ARTFULIZE - ART MARTKETPLACE </h3>
              <p className="project-desc">
                An online art marketplace that allows users to find unique
                arts/designs, save to wishlist, add to cart, checkout with
                Stripe payment, and become a seller for their arts.
              </p>
              <div className="project-stack">
                <p>Next JS</p>
                <p>Next Auth</p>
                <p>React</p>
                <p>MongoDB</p>
                <p>SCSS</p>
                <p>Stripe</p>
              </div>
              <div className="project-links">
                <a href="https://github.com/phuc-mai/artfulize" target="_blank">
                  Code
                  <i class="fa-brands fa-github"></i>
                </a>
                <a href="https://artfulize.phucmai.com/" target="_blank">
                  Live Demo
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
            <div className="project-img">
              <a href="https://artfulize.phucmai.com/" target="_blank">
                <img src="assets/Artfulize.png" alt="art-marketplace" />
              </a>
            </div>
          </div>

          <div className="project">
            <div className="project-img">
              <a href="https://zingzone.vercel.app/" target="_blank">
                <img src="assets/zingzone.png" alt="social media app" />
              </a>
            </div>
            <div className="project-text">
              <h3>ZING ZONE - SOCIAL MEDIA APP</h3>
              <p className="project-desc">
                Zing Zone allows user to create account, publish or edit posts
                with photo, remove posts, like or dislike other posts, save or
                unsave posts, search for users and posts, follow or unfollow
                people, view all Feed posts and other personal pages.
              </p>
              <div className="project-stack">
                <p>Next JS</p>
                <p>React</p>
                <p>Clerk Auth</p>
                <p>MongoDB</p>
                <p>Tailwind CSS</p>
                <p>Material UI</p>
              </div>
              <div className="project-links">
                <a href="https://github.com/phuc-mai/zingzone" target="_blank">
                  Code
                  <i class="fa-brands fa-github"></i>
                </a>
                <a href="https://zingzone.vercel.app/" target="_blank">
                  Live Demo
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="project-reverse">
            <div className="project-text">
              <h3>HOME HEAVEN - PROPERTY RENTAL APP</h3>
              <p className="project-desc">
                An online marketplace that allows users to find unique
                accommodations for their trips, save to wishlist, book
                reservations, and become a host for their properties.
              </p>
              <div className="project-stack">
                <p>React</p>
                <p>Redux</p>
                <p>Node</p>
                <p>Express</p>
                <p>MongoDB</p>
                <p>JWT</p>
                <p>SCSS</p>
                <p>Material UI</p>
              </div>
              <div className="project-links">
                <a
                  href="https://github.com/phuc-mai/Home-Heaven"
                  target="_blank"
                >
                  Code
                  <i class="fa-brands fa-github"></i>
                </a>
                <a href="https://homeheaven.phucmai.com/" target="_blank">
                  Live Demo
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
            <div className="project-img">
              <a href="https://homeheaven.phucmai.com/" target="_blank">
                <img src="assets/Home Heaven.png" alt="property-app" />
              </a>
            </div>
          </div>

          <div className="project">
            <div className="project-img">
              <a href="https://motorbikerental.phucmai.com/" target="_blank">
                <img src="assets/Motorbike Rental.png" alt="motor-rental" />
              </a>
            </div>
            <div className="project-text">
              <h3>MOTORBIKE RENTAL</h3>
              <p className="project-desc">
                A motorbike rental website is an online platform that allows
                users to rent motorbikes for personal or business use. The
                website provides an interface for searching, comparing, and
                reserving cars.
              </p>
              <div className="project-stack">
                <p>React</p>
                <p>CSS</p>
                <p>Javascript</p>
              </div>
              <div className="project-links">
                <a
                  href="https://github.com/phuc-mai/Motorbike-Rental"
                  target="_blank"
                >
                  Code
                  <i class="fa-brands fa-github"></i>
                </a>
                <a href="https://motorbikerental.phucmai.com/" target="_blank">
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
                <a href="https://github.com/phuc-mai/fitfinity" target="_blank">
                  Code
                  <i class="fa-brands fa-github"></i>
                </a>
                <a href="https://fitfinity.phucmai.com/" target="_blank">
                  Live Demo
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>

            <div className="project-img">
              <a href="https://fitfinity.phucmai.com/" target="_blank">
                <img src="assets/Fitfinity.png" alt="fitfinity-gym-center" />
              </a>
            </div>
          </div>

          {/* <div className="project">
            <div className="project-img">
              <a href="https://phucmaicryptoverse.netlify.app/" target="_blank">
                <img src="assets/Cryptoverse.png" alt="cryptoverse" />
              </a>
            </div>
            <div className="project-text">
              <h3>CRYPTOVERSE</h3>
              <p className="project-desc">
                Cryptocurrencies Website with in-depth data about all coins,
                crypto markets and popular news. Fetch data from 2 different
                sources using Rapid Api. Create charts of market prices in
                real-time using Chart.js
              </p>
              <div className="project-stack">
                <p>React</p>
                <p>Ant Design</p>
                <p>RapidApi</p>
                <p>Javascript</p>
              </div>
              <div className="project-links">
                <a
                  href="https://github.com/phuc-mai/cryptoverse"
                  target="_blank"
                >
                  Code
                  <i class="fa-brands fa-github"></i>
                </a>
                <a
                  href="https://phucmaicryptoverse.netlify.app/"
                  target="_blank"
                >
                  Live Demo
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
          </div> */}

          {/* <div className="project-reverse">
            <div className="project-text">
              <h3>YOUTUBE MEDIA</h3>
              <p className="project-desc">
                YouTube Clone to play media from RapidAPI with video section,
                custom categories, responsive channel & video cards. Allow users
                to play the video straight from the app and see related videos
                on the right side
              </p>
              <div className="project-stack">
                <p>React</p>
                <p>Material UI</p>
                <p>Javascript</p>
                <p>RapidApi</p>
                <p>Redux</p>
              </div>
              <div className="project-links">
                <a
                  href="https://github.com/phuc-mai/youtube_clone"
                  target="_blank"
                >
                  Code
                  <i class="fa-brands fa-github"></i>
                </a>
                <a href="https://phuc-mai-media.netlify.app/" target="_blank">
                  Live Demo
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
            <div className="project-img">
              <a href="https://phuc-mai-media.netlify.app/" target="_blank">
                <img src="assets/Youtube.jpg" alt="youtube" />
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
