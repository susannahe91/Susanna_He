import React, { useEffect } from "react";
import "./Home.css";

// import EmailIcon from './assets/icons/EmailIcon.svg';
// import GitHubIcon from './assets/icons/GitHubIcon.svg';

import ProjectCard from "../../components/ProjectCard/ProjectCard";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import proj1 from "../../assets/proj1.webp";
import proj2 from "../../assets/proj2.webp";
import proj3 from "../../assets/proj3.webp";

const projectCards = [
  {
    projectImage: proj3,
    projectRoles: "UX Research, UX Design",
    projectTitle: "Discord Redesign",
    projectDescription:
      "A UX case study & redesign of the Discord mobile app, focused on its server notification management systems.",
    projectLink: "/discord-redesign",
  },
  {
    projectImage: proj2,
    projectRoles: "Full-Stack Web Development",
    projectTitle: "SciQuel",
    projectDescription:
      "Full-stack web development at SciQuel, an organization that aims to make scientific research more accessible and digestible to the average person. (Coming soon, launching October 2023!)",
    projectLink: "",
    // projectLink: "https://www.sciquel.org/",
  },
  {
    projectImage: proj1,
    projectRoles: "UX Research, UI/UX Design",
    projectTitle: "Instagram Health",
    projectDescription:
      "A UX case study of the Instagram mobile app with the goal of enabling the social media app to facilitate healthy habits and lifestyle choices.",
    projectLink: "https://susannahe91.github.io/instagram-health/",
  },
];

function Home({ onPageChange }) {
  useEffect(() => {
    onPageChange("Home");
  }, [onPageChange]);

  return (
    <div>
      <div className="home-landing-container">
        <p className="secondary-heading caps">Hi I'm</p>
        <h1 className="main-heading">Susanna He</h1>
        <h2 className="secondary-heading">
          full-stack developer & ui/ux designer
        </h2>
        <div className="home-link-icons">
          <a href="mailto:susannahe91@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} className="link-icon" />
            {/* <img src={EmailIcon} alt="Email" /> */}
          </a>
          <a href="https://github.com/susannahe91">
            {/* <img src={GitHubIcon} alt="GitHub" /> */}
            <FontAwesomeIcon icon={faGithub} className="link-icon" />
          </a>
        </div>
      </div>

      <div className="home-projects-list" id="work">
        {/* <h2 className="">Work</h2> */}
        <div className="project-card-grid">
          {projectCards.map((project, index) => (
            <ProjectCard
              key={index}
              projectNumber={index + 1}
              projectImage={project.projectImage}
              projectRoles={project.projectRoles}
              projectTitle={project.projectTitle}
              projectDescription={project.projectDescription}
              projectLink={project.projectLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
