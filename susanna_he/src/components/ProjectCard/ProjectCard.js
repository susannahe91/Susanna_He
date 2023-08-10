// import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./ProjectCard.css";

// function ProjectCard() {
//   return (
//     <div className="project-card-container">
//       <img src={this.props.projectImage} alt=""></>
//     </div>
//   );
// }

function ProjectCard(props) {
  const {
    projectNumber,
    projectImage,
    projectRoles,
    projectTitle,
    projectDescription,
    projectLink,
  } = props;
  // console.log(projectNumber)
  const altText = "Project " + projectNumber;

  const renderLink = (content) => {
    if (projectLink.startsWith("http")) {
      return <a href={projectLink} className="project-link">{content}</a>;
    } else {
      return <Link to={projectLink} className="project-link">{content}</Link>;
    }
  };

  return (
    <div className="project-card-container">
      {/* <Link to={projectLink}>
        <img src={projectImage} className="project-link" alt={altText} />
      </Link> */}

      {renderLink(<div className="project-img-box"><img src={projectImage} alt={altText} /></div>)}

      <h3>{projectRoles}</h3>

      {/* <h2>
        <Link to={projectLink} className="project-link">{projectTitle}</Link>
      </h2> */}

      {renderLink(<h2>{projectTitle}</h2>)}

      <p>{projectDescription}</p>
    </div>
  );
}

export default ProjectCard;
