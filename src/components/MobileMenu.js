import React from "react";

// Style
import "../styles/components/MobileMenu.css";

function MobileMenu() {
  async function toggleHamburgerMenu() {
    // get mobile menu element
    const mobileMenuElement = document.getElementById("MobileMenu");

    // if active
    if (mobileMenuElement.classList.contains("mobile--menu--activate")) {
      mobileMenuElement.classList.remove("mobile--menu--activate");

      // change hamburger container color
      document
        .getElementsByClassName("hamburger__menu__container")[0]
        .classList.remove("hamburger--container--mobile--menu--active");

      // Change hamburger lines color
      const hamburgerElements =
        document.getElementsByClassName("hamburger--lines");

      for (let i = 0; i < hamburgerElements.length; i++) {
        hamburgerElements[i].classList.remove(
          "hamburger--mobile--menu--active"
        );
      }
    } else {
      mobileMenuElement.classList.add("mobile--menu--activate");

      // change hamburger container color
      document
        .getElementsByClassName("hamburger__menu__container")[0]
        .classList.add("hamburger--container--mobile--menu--active");

      // Change hamburger lines color
      const hamburgerElements =
        document.getElementsByClassName("hamburger--lines");

      for (let i = 0; i < hamburgerElements.length; i++) {
        hamburgerElements[i].classList.add("hamburger--mobile--menu--active");
      }
    }

    document.getElementById("check").checked = false;
  }
  return (
    <section className="mobile__menu__container" id="MobileMenu">
      <a href="#LandingPage" onClick={toggleHamburgerMenu}>
        Home
      </a>
      <a href="#AboutPage" onClick={toggleHamburgerMenu}>
        About
      </a>
      <a href="#ServicesPage" onClick={toggleHamburgerMenu}>
        Services
      </a>
      <a href="#ProjectsPage" onClick={toggleHamburgerMenu}>
        Project
      </a>

      <a href="#ContactPage" onClick={toggleHamburgerMenu}>
        Contact Me
      </a>
    </section>
  );
}

export default MobileMenu;
