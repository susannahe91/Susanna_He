import React, { useEffect } from "react";
import "./About.css";
import profileImg from "../../assets/profile_image.webp";

// link to resume, update as needed
const resumeLink =
  "https://drive.google.com/file/d/1SehH8pBBVDcx95mkrq0cnnpk8c6ffZ3n/view?usp=share_link";

function About({ onPageChange }) {
  useEffect(() => {
    onPageChange("About");
  }, [onPageChange]);

  return (
    <div className="about-container">
      <div className="profile-img-container">
        <img src={profileImg} alt="Susanna He"></img>
      </div>
      <div className="about-content">
        <h1 className="main-heading">About Me</h1>
        <h2 className="secondary-heading">
          「　developer, designer, artist, problem solver。　」
        </h2>
        <div className="about-text">
          <p>Hi! I'm Susanna, a full-stack developer and UI/UX designer.</p>
          <p>
            I received my Bachelor of Science in Computer Science from UC San
            Diego in 2023. It was thanks to the various design and usability
            architecture courses that I'd taken out of interest during my
            undergraduate years, as well as thanks to the enlightening
            opportunities that I'd had the pleasure to take working closely
            alongside remarkable project managers and designers that I also
            chose to begin my own journey as a designer. Making use of my
            background in illustration (which I'd picked up on my own from
            outside of school), I look to build the bridge between logic with
            empathy and hit the sweet spot between pragmatism and creativity.
          </p>
          <p>
            As both a detail-oriented programmer and an empathetic designer, I
            make it a habit to consider problems from all sorts of angles: is
            the code efficient, flexible, and scalable? Does the design flow
            logically and does it feel good and intuitive to use, for all types
            of users? Is it visually pleasing? In answering these questions I
            draw upon my interdisciplinary knowledge and strive for harmony
            between each part of my work, all in the pursuit of delivering the
            best possible experience to my users.
          </p>
          <p>
            The bottom line is quite simple, really:{" "}
            <b>I love to understand others, and I love to create</b>. I love to
            create things that spark joy in others — creating is something that
            involves problem solving, and as a problem solver at heart, whether
            it be through code, design, or illustration, I find fulfillment
            through the iterative process of building, reflecting, and
            refining.
          </p>
        </div>

        <a href={resumeLink} className="link-button">
          View My Resume
        </a>
      </div>
    </div>
  );
}

export default About;
