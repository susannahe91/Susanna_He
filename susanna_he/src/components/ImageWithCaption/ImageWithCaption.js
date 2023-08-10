import React, { useState, useEffect } from "react";
import "./ImageWithCaption.css";

function ImageWithCaption(props) {
  const {
    captionHeading,
    captionText,
    image,
    imageAltText,
    isImageBanner,
    titleBanner,
    noMargin,
    expandBg,
  } = props;

  const [isImageOverlayOn, setIsImageOverlayOn] = useState(false);

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

  function toValidHTMLId(str) {
    return str
      .toLowerCase() // Convert the string to lowercase
      .replace(/\s+/g, "-") // Replace all whitespace with hyphens
      .replace(/[^a-z0-9-_]/g, "") // Remove all characters that are not letters, digits, hyphens, or underscores
      .replace(/^-+|-+$/g, ""); // Remove any leading or trailing hyphens
  }

  let isTitleBanner,
    titleTextColor,
    titleStyle,
    sectionId = null;
  if (titleBanner) {
    [isTitleBanner, titleTextColor] = titleBanner;

    titleStyle = {
      color: titleTextColor,
    };
  }
  if (captionHeading) {
    sectionId = toValidHTMLId(captionHeading);
  }

  return (
    <div id={sectionId}>
      <div className="image-with-caption" style={{ margin: noMargin ? '0' : '' }}>
        {captionHeading && captionText && (
          <div
            className={`image-caption-container ${
              isTitleBanner ? "title" : ""
            }`}
          >
            <h3 style={titleStyle}>{captionHeading}</h3>
            <p>{captionText}</p>
          </div>
        )}

        <div className={`media-container ${isImageBanner ? "banner" : ""}`}>
          <img src={image} alt={imageAltText} onClick={handleImageClick} />
        </div>
      </div>

      <div
        className={`modal-overlay ${isImageOverlayOn ? "active" : ""}`}
        onClick={closeOverlay}
      >
        {isImageOverlayOn && (
          <div className={`modal-content ${isImageOverlayOn ? "active" : ""}`} style={expandBg ? { backgroundColor: expandBg } : {}}>
            <img src={image} alt={imageAltText} />
          </div>
        )}
      </div>
    </div>
  );
}

export default ImageWithCaption;
