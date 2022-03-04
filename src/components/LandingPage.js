import React from "react";

import "../styles/components/LandingPage.css";

function LandingPage() {
  return (
    <section className="landing__page__container" id="LandingPage">
      {/* Left Section */}
      <div className="landing__page__left">
        <p>Howdy-doody! 🙃 I'm</p>
        <h1>Thomas Alemayehu</h1>
        <h5>Full Stack developer & Security Analyst</h5>
        <p>
          I am a full stack developer with great eye for design and optimized
          backend based in Addis Ababa.
        </p>
        <a href="#ContactPage">Hire Me</a>
      </div>

      {/* Right Section */}

      <img
        src="/assets/image/landing-page-image3.png"
        className="landing__page__right"
        alt="A fun animation of me"
      />
    </section>
  );
}

export default LandingPage;
