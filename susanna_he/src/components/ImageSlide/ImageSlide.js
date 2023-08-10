import React, { useState, useEffect } from "react";
import "./ImageSlide.css";

function ImageSlide(props) {
  const {
    slideTopic,
    slideHeading,
    slideImage,
    slideAltText,
    slideText,
    slideBullets,
    imageRight,
    textBgColor,
    bgColor,
    expandBg,
  } = props;

  const [isImageOverlayOn, setIsImageOverlayOn] = useState(false);
  const isList = !slideText && slideBullets && slideBullets.length > 0;

    // const imgBackgroundColor = {
    //   backgroundColor: bgColor,
    // };

  const closeOnEsc = (event) => {
    if (event.key === "Escape" && isImageOverlayOn) {
      closeOverlay();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", closeOnEsc);

    return () => {
      document.removeEventListener("keydown", closeOnEsc);
    };
  }, [isImageOverlayOn]);

  const handleImageClick = () => {
    setIsImageOverlayOn(true);
  };

  const closeOverlay = () => {
    setIsImageOverlayOn(false);
  };

  return (
    <section id={slideTopic.toLowerCase()}>
      {imageRight && (
        <div className="image-slide-container">
          <div className="slide-text-container" style={textBgColor ? { backgroundColor: textBgColor } : {}}>
            <div className="slide-text">
              <h2>{slideTopic}</h2>
              <h3>{slideHeading}</h3>
              {isList ? (
                <ul>
                  {slideBullets.map((bullet, index) => (
                    <li key={index}>{bullet}</li>
                  ))}
                </ul>
              ) : (
                <div>
                  {slideText.map((text, index) => (
                    <p key={index}>{text}</p>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="slide-media-container" style={bgColor ? { backgroundColor: bgColor } : {}}>
            <img
              src={slideImage}
              alt={slideAltText}
              onClick={handleImageClick}
            />
          </div>
        </div>
      )}

      {!imageRight && (
        <div className="image-slide-container">
          <div className="slide-media-container" style={bgColor ? { backgroundColor: bgColor } : {}}>
            <img
              src={slideImage}
              alt={slideAltText}
              onClick={handleImageClick}
            />
          </div>

          <div className="slide-text-container" style={textBgColor ? { backgroundColor: textBgColor } : {}}>
            <div className="slide-text">
              <h2>{slideTopic}</h2>
              <h3>{slideHeading}</h3>
              {/* <p>{slideText}</p> */}

              {isList ? (
                <ul>
                  {slideBullets.map((bullet, index) => (
                    <li key={index}>{bullet}</li>
                  ))}
                </ul>
              ) : (
                <div>
                  {slideText.map((text, index) => (
                    <p key={index}>{text}</p>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      {/* 
      {isImageOverlayOn && (
        // <div className="modal-overlay" onClick={closeOverlay}>
        <div
          className={`modal-overlay ${isImageOverlayOn ? "active" : ""}`}
          onClick={closeOverlay}
        >
          <div className="modal-content">
            <img src={slideImage} alt={slideAltText} />
          </div>
        </div>
      )} */}
      {/* Modal Overlay */}
      <div
        className={`modal-overlay ${isImageOverlayOn ? "active" : ""}`}
        onClick={closeOverlay}
      >
        {isImageOverlayOn && (
          <div className={`modal-content ${isImageOverlayOn ? "active" : ""}`} style={expandBg ? { backgroundColor: expandBg } : {}}>
            <img src={slideImage} alt={slideAltText} />
          </div>
        )}
      </div>
    </section>
  );
}

export default ImageSlide;
