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

    function scrollHandler(e) {
      const { scrollY } = window;
      up = scrollY < prevScrollY;
      down = !up;
      const timelineRect = timeline.getBoundingClientRect();
      const lineRect = line.getBoundingClientRect(); // const lineHeight = lineRect.bottom - lineRect.top;

      const dist = targetY - timelineRect.top;
      console.log(dist);

      if (down && !full) {
        set = Math.max(set, dist);
        line.style.bottom = `calc(100% - ${set}px)`;
      }

      if (dist > timeline.offsetHeight + 50 && !full) {
        full = true;
        line.style.bottom = `-50px`;
      }

      sections.forEach((item) => {
        // console.log(item);
        const rect = item.getBoundingClientRect(); //     console.log(rect);

        if (rect.top + item.offsetHeight / 5 < targetY) {
          item.classList.add("show-me");
        }
      }); // console.log(up, down);

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
            alt=""
            className="about__page__image"
          />
        </div>
        {/* Right Content */}
        <div className="about__page__right">
          <h3> About Me </h3>
          <p>
            I’m Oluwakemi Adeleke, a professional and talented Product Designer
            with front end development skills. I am passionate about leveraging
            my diverse backgrounds to decipher challenging problems and create
            delightful experiences. I honed my skills at web development,
            technical writing, product design and SEO analytics. I develop
            websites with HTML, CSS and JavaScript. I have top skills in using
            design softwares like Figma, Adobe XD, Invision and PhotoShop; with
            prototype tools like Framer and Protopie. Being a diligent,
            hardworking and result oriented lady, I always work towards
            achieving best result on each project I lay my hands on.
          </p>
          <a href="">Download my cv</a>
        </div>
      </div>

      {/* Timeline */}
      <div className="timeline">
        <div className="line"></div>

        <div className="section">
          <div className="bead"></div>
          <div className="content">
            <h1 className="experiance-page-timeline-title">Born Day 🎂</h1>
            <p className="experiance-page-timeline-time">
              February 14th , 2000
            </p>
            <p className="experiance-page-timeline-content"></p>
          </div>
        </div>

        <div className="section">
          <div className="bead"></div>
          <div className="content">
            <h1 className="experiance-page-timeline-title">Hill Side School</h1>
            <p className="experiance-page-timeline-time">2004 - 2018</p>
            <p className="experiance-page-timeline-content">
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
            <h1 className="experiance-page-timeline-title">
              Meseret Humanitarian Organization
            </h1>
            <p className="experiance-page-timeline-time">2017 - 2018</p>
            <p className="experiance-page-timeline-content">
              Part of a group that sold tickets as donation and collected in
              kind donations for the “One Pack for One Child” Project, preparing
              school essential packs for children of economically weak families.
            </p>
          </div>
        </div>

        <div className="section">
          <div className="bead"></div>
          <div className="content">
            <h1 className="experiance-page-timeline-title">
              Nehemiah Autism Centre
            </h1>
            <p className="experiance-page-timeline-time">2018 - 2019</p>
            <p className="experiance-page-timeline-content">
              Spend some time with autistic children. Teach them to adapt to new
              people, improve communication with people and learn to focus and
              read.
            </p>
          </div>
        </div>

        <div className="section">
          <div className="bead"></div>
          <div className="content">
            <h1 className="experiance-page-timeline-title">
              Jersuma Trading P.L.C
            </h1>
            <p className="experiance-page-timeline-time">2018 - Present</p>
            <p className="experiance-page-timeline-content">
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
            <h1 className="experiance-page-timeline-title">
              Addis Ababa Institute of Technology
            </h1>
            <p className="experiance-page-timeline-time">2019 - Present</p>
            <p className="experiance-page-timeline-content">
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
            <h1 className="experiance-page-timeline-title">Gebeya Talent</h1>
            <p className="experiance-page-timeline-time">2021 - Present</p>
            <p className="experiance-page-timeline-content">
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
