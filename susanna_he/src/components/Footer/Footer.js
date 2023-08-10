// import { Link } from "react-router-dom";
import "./Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-copyright">© 2023 Susanna He</div>
      <div className="footer-link-icons">
        <a href="mailto:susannahe91@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} className="link-icon"/>
        </a>
        <a href="https://github.com/susannahe91">
          <FontAwesomeIcon icon={faGithub} className="link-icon"/>
        </a>
      </div>
    </div>
  );
}

export default Footer;
