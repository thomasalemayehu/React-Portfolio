import React from "react";
import ContactPage from "../components/ContactPage";
import LandingPage from "../components/LandingPage";
import AboutPage from "../components/AboutPage";
import ProjectPage from "../components/ProjectPage";
import ServicePage from "../components/ServicePage";

function Body() {
  return (
    <section>
      <LandingPage />
      <AboutPage />
      <ProjectPage />
      <ServicePage />
      <ContactPage />
    </section>
  );
}

export default Body;
