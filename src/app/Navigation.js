import React from "react";

// Import Components
import HamburgerMenu from "../components/HamburgerMenu";
import MainMenu from "../components/MainMenu";
import MobileMenu from "../components/MobileMenu";

// Import Style
import "../styles/app/Navigation.css";

function Navigation() {
  return (
    <section className="navigation__menu__container">
      {/* Mobile Menu */}
      <HamburgerMenu />
      {/* Mobile Menu */}

      {/* Main Menu */}
      <MainMenu />
      {/* Main Menu */}

      {/* Mobile Menu */}
      <MobileMenu />
    </section>
  );
}

export default Navigation;
