import React from "react";

import "../styles/components/ContactPage.css";

// Import Util
import "../utils/validation";
import formValidator from "../utils/validation";

function ContactPage() {
  function handleFormSubmission() {
    formValidator();
  }
  return (
    <section className="contact__container ">
      {/* Left Container */}
      <div className="contact__container__left">
        <div>
          <h2>get in touch</h2>
          <p>
            Fill up the form and I will get back to you as soon as possible! You
            can find me on upwork and fiver as well.
          </p>
          {/* Email */}
          <div className="contact__info__container">
            <img src="./assets/image/location.svg" alt="Thomas's Location" />

            <div>Addis Ababa, Ethiopia </div>

            <img src="./assets/image/Ethiopia.svg" alt="Ethiopian Flag" />
          </div>
          {/* Location */}
          <div className="contact__info__container">
            <img src="./assets/image/email.svg" alt="Thomas's Email" />
            <div>thomas2alexmech@gmail.com</div>
          </div>
          {/* Phone Number */}
          <div className="contact__info__container">
            <img src="./assets/image/phone.svg" alt="Thomas's Phone" />
            <div>Email me and you will get it😉</div>
          </div>
        </div>

        {/* Socials */}
        <div className="contact__socials__container">
          <a
            href="https://github.com/thomasalemayehu"
            target="__blank"
            className="contact__socials"
          >
            <img src="./assets/image/github.svg" alt="Github" />
          </a>
          <a
            href="https://www.linkedin.com/in/thomas-alemayehu-a61675204/"
            target="__blank"
            className="contact__socials"
          >
            <img src="./assets/image/linkedin.svg" alt="Linkedin" />
          </a>
          <a
            href="https://twitter.com/thomas_alemayeh"
            target="__blank"
            className="contact__socials"
          >
            <img src="./assets/image/twitter.svg" alt="Twitter" />
          </a>
          <a
            href="https://www.instagram.com/?hl=en"
            target="__blank"
            className="contact__socials"
          >
            <img src="./assets/image/instagram.svg" alt="Instagram" />
          </a>
        </div>

        <div className="contact__decoration"></div>
        <div className="contact__decoration_small"></div>
      </div>

      {/* Right Container */}
      <form className="contact__container__right" id="Form">
        <h2>Our very own smoke signal!</h2>
        <div className="container-row justify-space-between">
          {/* First Name */}
          <div className="container-col w45">
            <label htmlFor="FirstName" className="contact__form__label">
              First Name <span>*</span>
            </label>
            <input type="text" name="FirstName" id="FirstName" />
            <span id="FirstNameErrorMessage">Message</span>
          </div>

          {/* Last Name */}
          <div className="container-col w45">
            <label htmlFor="LastName" className="contact__form__label">
              Last Name
            </label>
            <input type="text" name="LastName" id="LastName" />
            <span id="LastNameErrorMessage">Message</span>
          </div>
        </div>

        <div className="container-row justify-space-between margin-top-50">
          {/* Email */}
          <div className="container-col w45">
            <label htmlFor="Email" className="contact__form__label">
              Email <span>*</span>
            </label>
            <input type="text" name="Email" id="Email" />

            <span id="EmailErrorMessage">Message</span>
          </div>

          {/* Phone Number */}
          <div className="container-col w45">
            <label htmlFor="Phone" className="contact__form__label">
              Phone
            </label>
            <input type="number" name="Phone" id="Phone" />

            <span id="PhoneErrorMessage">Message</span>
          </div>
        </div>

        {/* Subject */}
        <div className="container-col margin-top-50">
          <label htmlFor="Subject" className="contact__form__label">
            Subject
          </label>

          <input type="text" name="Subject" id="Subject" />
          <span id="SubjectErrorMessage">Message</span>
        </div>

        {/* Message */}
        <div className="container-col margin-top-50">
          <label htmlFor="Message" className="contact__form__label">
            Message <span>*</span>
          </label>

          <input type="text" name="Message" id="Message" />
          <span id="MessageErrorMessage">Message</span>
        </div>

        {/* Submit Button */}
        <div
          className="contact__form__submit__button"
          onClick={handleFormSubmission}
        >
          Send
        </div>
      </form>
    </section>
  );
}

export default ContactPage;
