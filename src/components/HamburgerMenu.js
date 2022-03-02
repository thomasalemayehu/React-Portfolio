import React from "react";

// Import Style
import "../styles/components/HamburgerMenu.css";

function HamburgerMenu() {
  return (
    <nav className="hamburger__menu__container">
      <label htmlFor="check">
        <input type="checkbox" id="check" />
        <span></span>
        <span></span>
        <span></span>
      </label>
    </nav>
  );
}

export default HamburgerMenu;
