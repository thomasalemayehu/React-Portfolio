import React, { useEffect } from "react";

import "../styles/components/AboutPage.css";

function AboutPage() {
  function loadTimeLine() {
    function qs(selector, all = false) {
      return all
        ? document.querySelectorAll(selector)
        : document.querySelector(selector);
    }

    const sections = qs(".section", true);
    const timeline = qs(".timeline");
    const line = qs(".line");
    line.style.bottom = `calc(100% - 20px)`;
    let prevScrollY = window.scrollY;
    let up, down;
    let full = false;
    let set = 0;
    const targetY = window.innerHeight * 0.8;

    function scrollHandler() {
      const { scrollY } = window;
      up = scrollY < prevScrollY;
      down = !up;
      const timelineRect = timeline.getBoundingClientRect();
      const dist = targetY - timelineRect.top;

      if (down && !full) {
        set = Math.max(set, dist);
        line.style.bottom = `calc(100% - ${set}px)`;
      }

      if (dist > timeline.offsetHeight + 50 && !full) {
        full = true;
        line.style.bottom = `-50px`;
      }

      sections.forEach((item) => {
        const rect = item.getBoundingClientRect();

        if (rect.top + item.offsetHeight / 5 < targetY) {
          item.classList.add("show-me");
        }
      });

      prevScrollY = window.scrollY;
    }

    scrollHandler();
    line.style.display = "block";
    window.addEventListener("scroll", scrollHandler);
  }
  useEffect(() => {
    loadTimeLine();
  });
  return (
    <section className="about__page__container" id="AboutPage">
      <div className="about__page__inner__container">
        {/* Left Content */}
        <div className="about__page__left">
          <div className="about__page__border"></div>
          <img
            src="./assets/image/my-image.jpg"
            alt="Thomas Alemayehu"
            className="about__page__image"
          />
        </div>
        {/* Right Content */}
        <div className="about__page__right">
          <h3> About Me </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi.
          </p>
          <a href="./assets/docs/Thomas Alemayehu CV.pdf" download>
            Download my CV
          </a>
        </div>
      </div>

      {/* Timeline */}
      <div className="timeline">
        <div className="line"></div>

        <div className="section">
          <div className="bead"></div>
          <div className="content">
            <h1 className="timeline__title">Born Day🎂</h1>
            <p className="timeline__time__span">February 14th , 2000</p>
            <p className="timeline__content"></p>
          </div>
        </div>

        <div className="section">
          <div className="bead"></div>
          <div className="content">
            <h1 className="timeline__title">Doing Stuff👶</h1>
            <p className="timeline__time__span">2000 - 2004</p>
            <p className="timeline__content"></p>
          </div>
        </div>

        <div className="section">
          <div className="bead"></div>
          <div className="content">
            <h1 className="timeline__title">Hill Side School</h1>
            <p className="timeline__time__span">2004 - 2018</p>
            <p className="timeline__content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              labore ducimus modi magnam, magni inventore ratione quasi eaque
              officiis, sunt ipsam nemo, est qui accusantium dolore itaque
              temporibus repellat aut.
            </p>
          </div>
        </div>

        <div className="section">
          <div className="bead"></div>
          <div className="content">
            <h1 className="timeline__title">
              Meseret Humanitarian Organization
            </h1>
            <p className="timeline__time__span">2017 - 2018</p>
            <p className="timeline__content">
              Part of a group that sold tickets as donation and collected in
              kind donations for the “One Pack for One Child” Project, preparing
              school essential packs for children of economically weak families.
            </p>
          </div>
        </div>

        <div className="section">
          <div className="bead"></div>
          <div className="content">
            <h1 className="timeline__title">Nehemiah Autism Centre</h1>
            <p className="timeline__time__span">2018 - 2019</p>
            <p className="timeline__content">
              Spend some time with autistic children. Teach them to adapt to new
              people, improve communication with people and learn to focus and
              read.
            </p>
          </div>
        </div>

        <div className="section">
          <div className="bead"></div>
          <div className="content">
            <h1 className="timeline__title">Jersuma Trading P.L.C</h1>
            <p className="timeline__time__span">2018 - Present</p>
            <p className="timeline__content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              labore ducimus modi magnam, magni inventore ratione quasi eaque
              officiis, sunt ipsam nemo, est qui accusantium dolore itaque
              temporibus repellat aut.
            </p>
          </div>
        </div>

        <div className="section">
          <div className="bead"></div>
          <div className="content">
            <h1 className="timeline__title">
              Addis Ababa Institute of Technology
            </h1>
            <p className="timeline__time__span">2019 - Present</p>
            <p className="timeline__content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              labore ducimus modi magnam, magni inventore ratione quasi eaque
              officiis, sunt ipsam nemo, est qui accusantium dolore itaque
              temporibus repellat aut.
            </p>
          </div>
        </div>

        <div className="section">
          <div className="bead"></div>
          <div className="content">
            <h1 className="timeline__title">Gebeya Talent</h1>
            <p className="timeline__time__span">2021 - Present</p>
            <p className="timeline__content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              labore ducimus modi magnam, magni inventore ratione quasi eaque
              officiis, sunt ipsam nemo, est qui accusantium dolore itaque
              temporibus repellat aut.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
