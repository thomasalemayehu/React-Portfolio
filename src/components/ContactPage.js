import React from "react";

import "../styles/components/ContactPage.css";

function ContactPage() {
  return (
    <section className="contact__container ">
      <h2>Contact Me</h2>
      <div className="contact__container__inner" id="ContactPage">
        {/* Form */}
        <form className="contact__form__container">
          {/* Full Name */}
          <div className="did-floating-label-content">
            <input className="did-floating-input" type="text" name="FullName" />
            <label className="did-floating-label" htmlFor="FullName">
              Full Name
            </label>
          </div>

          {/* Email */}
          <div className="did-floating-label-content">
            <input className="did-floating-input" type="text" name="Email" />
            <label className="did-floating-label" htmlFor="Email">
              Email*
            </label>
          </div>

          {/* Subject */}
          <div className="did-floating-label-content">
            <input className="did-floating-input" type="text" name="Subject" />
            <label className="did-floating-label" htmlFor="Subject">
              Subject{" "}
            </label>
          </div>

          {/* Message */}
          <div className="did-floating-label-content">
            <input className="did-floating-input" type="text" name="Message" />
            <label className="did-floating-label" htmlFor="Message">
              Message{" "}
            </label>
          </div>

          <div className="contact__form__submit__button">Send Email</div>
        </form>

        {/* Info */}
        <div className="contact__info__container">
          <h4>Get In Touch</h4>

          <p>
            Dropping a line to say g’day, ask for my resume or see if we can
            build something amazing together? I’d love to hear from you!
          </p>

          <p>
            Fill in your info in the form below and I look forward to hearing
            from you!
          </p>

          <div className="contact__info">
            <div className="contact__info__inner__container">
              {/* Location */}
              <div className="container-row">
                <div className="contact__info__icon">
                  <img src="./assets/image/location.svg" alt="Location" />
                </div>

                <div className="contact__info__text">Addis Ababa, Ethiopia</div>
              </div>

              {/* Email */}
              <div className="container-row">
                <div className="contact__info__icon">
                  <img src="./assets/image/email.svg" alt="Email" />
                </div>
                <div className="contact__info__text">
                  thomas2alexmech@gmail.com
                </div>
              </div>

              {/* Phone Number */}
              <div className="container-row">
                <div className="contact__info__icon">
                  <img src="./assets/image/phone.svg" alt="Phone Number" />
                </div>

                <div className="contact__info__text">+251-911-00-00-00</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
