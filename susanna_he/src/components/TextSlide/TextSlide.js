// import React, { useState, useEffect } from "react";
import "./TextSlide.css";

function TextSlide(props) {
  const {
    slideHeading,
    slideText,
    slideBullets,
    // primaryColor,
    // secondaryColor,
    slideDetails,
  } = props;

  //   const problemContainerStyle = {
  //     backgroundColor: primaryColor,
  //   };

  //   const solutionContainerStyle = {
  //     backgroundColor: secondaryColor,
  //   };

  const includeDetails = slideDetails.length > 0;
  const isList = !slideText && slideBullets && slideBullets.length > 0;

  function toValidHTMLId(str) {
    return str
      .toLowerCase() // Convert the string to lowercase
      .replace(/\s+/g, "-") // Replace all whitespace with hyphens
      .replace(/[^a-z0-9-_]/g, "") // Remove all characters that are not letters, digits, hyphens, or underscores
      .replace(/^-+|-+$/g, ""); // Remove any leading or trailing hyphens
  }

  return (
    <section id={toValidHTMLId(slideHeading)} className="text-section">
      <div className="text-slide-container">
        <div className="slide-text">
          <h2>{slideHeading}</h2>
          {/* <p>{slideText}</p> */}

          {isList ? (
            <ol>
              {slideBullets.map((bullet, index) => (
                <li key={index}>{bullet}</li>
              ))}
            </ol>
          ) : (
            <div>
              {slideText.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>
          )}
        </div>
      </div>

      {includeDetails && (
        <div className="text-slide-details">
          {slideDetails.map((detail, index) => (
            <div className="detail-block" key={index}>
              <span className="stat">{detail[0]}</span> {detail[1]}
            </div>
          ))}
        </div>
      )}

      {/* {includeDetails && (
        <div className="overview-details">
          <div className="detail-block">
            <span class="stat">{}</span> {}
          </div>
          <div className="detail-block">
            <span class="stat">{}</span> {}
          </div>
          <div className="detail-block">
            <span class="stat">{}</span> {}
          </div>
        </div>
      )} */}
    </section>
  );
}

export default TextSlide;
