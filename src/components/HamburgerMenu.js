import React from "react";

// Import Style
import "../styles/components/HamburgerMenu.css";

function HamburgerMenu() {
  function toggleHamburgerMenu() {
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
  }
  return (
    <nav className="hamburger__menu__container">
      <label htmlFor="check">
        <input type="checkbox" id="check" onClick={toggleHamburgerMenu} />
        <span className="hamburger--lines"></span>
        <span className="hamburger--lines"></span>
        <span className="hamburger--lines"></span>
      </label>
    </nav>
  );
}

export default HamburgerMenu;
