// import React, { useState, useEffect } from "react";
import "./OverviewSlide.css";

function OverviewSlide(props) {
  const {
    problemHeading,
    problemText,
    solutionHeading,
    solutionText,
    primaryColor,
    secondaryColor,
    studyDetails,
  } = props;

  const problemContainerStyle = {
    backgroundColor: primaryColor,
  };

  const solutionContainerStyle = {
    backgroundColor: secondaryColor,
  };

  const includeDetails = studyDetails.length > 0;
  let [teamDetails, toolDetails, timelineDetails] = "";

  if (includeDetails) {
    [teamDetails, toolDetails, timelineDetails] = studyDetails;
  }

  return (
    <section id="problem-and-solution">
      <div className="overview-slide-container">
        <div
          className="overview-problem-container"
          style={problemContainerStyle}
        >
          <div className="slide-text">
            <h2>The Problem</h2>
            <h3>{problemHeading}</h3>
            <p>{problemText}</p>
          </div>
        </div>

        <div
          className="overview-solution-container"
          style={solutionContainerStyle}
        >
          <div className="slide-text">
            <h2>The Solution</h2>
            <h3>{solutionHeading}</h3>
            <p>{solutionText}</p>
          </div>
        </div>
      </div>

      {includeDetails && (
        <div className="overview-details">
          <div className="detail-block">
            <h4>Role/Team</h4>
            <p>{teamDetails}</p>
          </div>
          <div className="detail-block">
            <h4>Tools</h4>
            <p>{toolDetails}</p>
          </div>
          <div className="detail-block">
            <h4>Timeline</h4>
            <p>{timelineDetails}</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default OverviewSlide;
