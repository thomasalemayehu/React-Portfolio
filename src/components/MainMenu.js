import React from "react";

// Import Style
import "../styles/components/MainMenu.css";

function MainMenu() {
  function animateMainMenuHoverBorder(e) {
    const borderElement = e.target.parentElement.parentElement.children[1];
    borderElement.style.width === "100%"
      ? (borderElement.style.width = "0%")
      : (borderElement.style.width = "100%");
  }
  return (
    <nav className="main__menu__container">
      <ul>
        <div>
          <li>
            <a
              href="#HomePage"
              className="main__menu__link"
              onMouseEnter={(e) => animateMainMenuHoverBorder(e)}
              onMouseLeave={(e) => animateMainMenuHoverBorder(e)}
            >
              Home
            </a>
          </li>
          <div className="main__menu__border"></div>
        </div>

        <div>
          <li>
            <a
              href="#AboutPage"
              className="main__menu__link"
              onMouseEnter={(e) => animateMainMenuHoverBorder(e)}
              onMouseLeave={(e) => animateMainMenuHoverBorder(e)}
            >
              About
            </a>
          </li>
          <div className="main__menu__border"></div>
        </div>

        <div>
          <li>
            <a
              href="#ServicesPage"
              className="main__menu__link"
              onMouseEnter={(e) => animateMainMenuHoverBorder(e)}
              onMouseLeave={(e) => animateMainMenuHoverBorder(e)}
            >
              Services
            </a>
          </li>
          <div className="main__menu__border"></div>
        </div>

        <div>
          <li>
            <a
              href="#ProjectsPage"
              className="main__menu__link"
              onMouseEnter={(e) => animateMainMenuHoverBorder(e)}
              onMouseLeave={(e) => animateMainMenuHoverBorder(e)}
            >
              Projects
            </a>
          </li>
          <div className="main__menu__border"></div>
        </div>
      </ul>

      <a href="#ContactPage" className="main__menu__cta__button">
        Contact Me
      </a>
    </nav>
  );
}

export default MainMenu;
