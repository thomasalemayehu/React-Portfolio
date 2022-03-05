import React from "react";

import "../styles/components/ServicePage.css";
function ServicePage() {
  return (
    <section className="services__container" id="ServicesPage">
      <h1>My Services</h1>

      <div className="services__card__container">
        {/* Card One */}
        <div className="services__card">
          <div className="services__card__icon__container">
            <img
              src="./assets/image/full-stack.svg"
              alt="Full Stack Developer"
            />
          </div>
          <h3>Full Stack Development</h3>
          <p className="services__card__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            quia fuga aut perspiciatis magnam, natus voluptatem dolores dolorem
            quos, illum quaerat quisquam nobis, quo accusantium.
          </p>
          <div className="services__card__border"></div>
        </div>

        {/* Card Two */}
        <div className="services__card">
          <div className="services__card__icon__container">
            <img src="./assets/image/web.svg" alt="Web Developer" />
          </div>
          <h3>Web Development</h3>
          <p className="services__card__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            quia fuga aut perspiciatis magnam, natus voluptatem dolores dolorem
            quos, illum quaerat quisquam nobis, quo accusantium.
          </p>
          <div className="services__card__border"></div>
        </div>

        {/* Card Three */}
        <div className="services__card">
          <div className="services__card__icon__container">
            <img src="./assets/image/mobile.svg" alt="Mobile Developer" />
          </div>
          <h3>Mobile Development</h3>
          <p className="services__card__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            quia fuga aut perspiciatis magnam, natus voluptatem dolores dolorem
            quos, illum quaerat quisquam nobis, quo accusantium.
          </p>
          <div className="services__card__border"></div>
        </div>

        {/* Card Four */}
        <div className="services__card">
          <div className="services__card__icon__container">
            <img src="./assets/image/encryption.svg" alt="Security Analyst" />
          </div>
          <h3>Security Analysis</h3>
          <p className="services__card__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            quia fuga aut perspiciatis magnam, natus voluptatem dolores dolorem
            quos, illum quaerat quisquam nobis, quo accusantium.
          </p>
          <div className="services__card__border"></div>
        </div>
      </div>
    </section>
  );
}

export default ServicePage;
