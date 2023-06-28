import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  // Set Navbar background when scrolling down
  const [navBg, setNavBg] = useState("");
  const handleScroll = () => {
    if (window.scrollY > 10) {
      setNavBg("nav-bg");
    } else {
      setNavBg("");
    }
  };
  window.addEventListener("scroll", handleScroll);

  // Set Navbar on mobile
  const [nav, setNav] = useState(false);
  const openNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <nav>
        {/* Desktop */}
        <div className={`navbar ${navBg}`}>
          <div className="navbar_logo">
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <h1>Phuc Mai</h1>
            </Link>
          </div>

          <ul className="navbar__links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="#about">About</Link>
            </li>
            <li>
              <Link to="#projects">Projects</Link>
            </li>
            <li>
              <Link to="#contact">Contact</Link>
            </li>
          </ul>

          <div className="mobile-hamb" onClick={openNav}>
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>

        {/* Mobile */}
        <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
          <div className="mobile-navbar-close" onClick={openNav}>
            <i className="fa-solid fa-xmark"></i>
          </div>
          <ul className="mobile-navbar__links">
            <li>
              <Link onClick={openNav} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="#about">
                About
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="#projects">
                Projects
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="#contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
