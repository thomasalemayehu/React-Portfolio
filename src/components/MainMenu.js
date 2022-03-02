import React from "react";

// Import Style
import "../styles/components/MainMenu.css";

function MainMenu() {
  return (
    <nav className="main__menu__container">
      <ul>
        <div>
          <li>
            <a href="/" className="main__menu__link">
              Home
            </a>
          </li>
          <div className="main__menu__border"></div>
        </div>

        <div>
          <li>
            <a href="/" className="main__menu__link">
              About
            </a>
          </li>
          <div className="main__menu__border"></div>
        </div>

        <div>
          <li>
            <a href="/" className="main__menu__link">
              Projects
            </a>
          </li>
          <div className="main__menu__border"></div>
        </div>

        <div>
          <li>
            <a href="/" className="main__menu__link">
              Contact
            </a>
          </li>
          <div className="main__menu__border"></div>
        </div>
      </ul>
    </nav>
  );
}

export default MainMenu;
