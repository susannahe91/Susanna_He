import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

import "./Header.css";

const resumeLink =
  "https://drive.google.com/file/d/1SehH8pBBVDcx95mkrq0cnnpk8c6ffZ3n/view?usp=share_link";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setIsMenuOpen(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav>
      <div className="logo-link">
        <li>
          <NavLink to="/" className="page-link">
            Susanna He
          </NavLink>
        </li>
      </div>

      <ul className={`navlinks-container ${isMenuOpen ? "menu-open" : ""}`}>
        <div className={`page-links ${isMenuOpen ? "menu-open" : ""}`}>
          <li>
            {/* <NavLink to="/" className="page-link" onClick={handleLinkClick}>
              Work
            </NavLink> */}
            <NavLink
              to="/"
              className="page-link"
              //   activeclassname="active-link"
              onClick={() => {
                setTimeout(() => {
                  const element = document.getElementById("work");
                  if (element) {
                    // console.log("work exists", element);
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }, 100); // Adjust the delay time as needed
              }}
            >
              Work
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="page-link"
              onClick={handleLinkClick}
            >
              About
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              to="/gallery"
              className="page-link"
              onClick={handleLinkClick}
            >
              Gallery
            </NavLink>
          </li> */}
          <li>
            <NavLink
              to={resumeLink}
              className="page-link"
              onClick={handleLinkClick}
            >
              Resume
            </NavLink>
          </li>
        </div>
      </ul>

      {/* {isMenuOpen && <div className="overlay" onClick={handleMenuToggle} />} */}
      {/* {isMenuOpen && <div className={`overlay ${isMenuOpen ? 'active' : ''}`} onClick={handleMenuToggle} />} */}
      <div
        className={`overlay ${isMenuOpen ? "active" : ""}`}
        onClick={handleMenuToggle}
      />

      <div
        className={`hamburger-menu ${isMenuOpen ? "menu-open" : ""}`}
        onClick={handleMenuToggle}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

export default Header;
