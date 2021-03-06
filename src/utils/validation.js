import { init } from "@emailjs/browser";
import emailjs from "emailjs-com";
init("gTool4GJ057LvqAfd");

function formValidator() {
  /*
        ========================================
        First Name Validation
        ========================================
    */

  const firstName = document.getElementById("FirstName").value;
  const firstNameValidate = validateName(
    "FirstName",
    "FirstNameErrorMessage",
    "First name"
  );

  /*
        ========================================
        Last Name Validation
        ========================================
    */
  var lastNameValidate = true;
  const lastName = document.getElementById("LastName").value;
  if (lastName) {
    lastNameValidate = validateName(
      "LastName",
      "LastNameErrorMessage",
      "Last name"
    );
  }

  /*
        ========================================
        Email Validation
        ========================================
    */
  const email = document.getElementById("Email").value;
  const emailValidate = validateEmail("Email", "EmailErrorMessage");

  /*
        ========================================
        Subject Validation
        ========================================
    */
  var subjectValidate = true;
  const subject = document.getElementById("Subject").value;
  if (subject) {
    subjectValidate = validateText(
      "Subject",
      "SubjectErrorMessage",
      6,
      "Subject"
    );
  }

  /*
        ========================================
        Message Validation
        ========================================
    */
  const message = document.getElementById("Message").value;
  var messageValidate = validateText(
    "Message",
    "MessageErrorMessage",
    15,
    "Message"
  );

  /*
        ========================================
        Phone Validation
        ========================================
    */
  var phoneValidate = true;
  const phone = document.getElementById("Phone").value;
  if (phone) {
    phoneValidate = validatePhone("Phone", "PhoneErrorMessage");
  }

  if (
    firstNameValidate &&
    lastNameValidate &&
    emailValidate &&
    phoneValidate &&
    subjectValidate &&
    messageValidate
  ) {
    const formElement = document.getElementById("Form");
    formElement.classList.add("loader__container");
    const form = formElement.innerHTML;
    const newLoaderElement = document.createElement("div");
    newLoaderElement.className = "loader";
    formElement.innerHTML = "";
    formElement.classList.remove("loader__container");
    formElement.appendChild(newLoaderElement);

    sendEmail(firstName, lastName, email, phone, subject, message);

    setTimeout(() => {
      formElement.innerHTML = form;
    }, 6000);
  }
}

function validateName(id, errorDisplayId, itemName) {
  var validationStatus = false;
  const valueInput = document.getElementById(id).value;
  const valueErrorElement = document.getElementById(errorDisplayId);

  //   if empty
  if (valueInput === "" || valueInput === null) {
    valueErrorElement.innerText = `${itemName} is required.`;
    valueErrorElement.classList.add("error__message");
  }
  //   very short first name
  else if (valueInput.length <= 2) {
    valueErrorElement.innerText = `${itemName} is too short.`;
    valueErrorElement.classList.add("error__message");
  }

  //   first name has number or symbols + submission
  else {
    var hasNumber = false;
    const n = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    for (let i = 0; i < n.length; i++) {
      if (valueInput.toString().includes(n[i])) {
        hasNumber = true;
        break;
      }
    }

    const regex = /^[A-Za-z]+$/;

    // if has number
    if (hasNumber) {
      valueErrorElement.innerText = `${itemName} has number.`;
      valueErrorElement.classList.add("error__message");
    }
    // has symbols
    else if (!regex.test(valueInput)) {
      valueErrorElement.innerText = `${itemName} includes invalid characters.`;
      valueErrorElement.classList.add("error__message");
    }
    // Valid
    else {
      valueErrorElement.classList.remove("error__message");
      validationStatus = true;
    }
  }

  return validationStatus;
}

function validateEmail(id, errorDisplayId) {
  var validationStatus = false;
  const emailInput = document.getElementById(id).value;
  const emailErrorElement = document.getElementById(errorDisplayId);

  if (!emailInput) {
    emailErrorElement.innerText = "Email is required.";
    emailErrorElement.classList.add("error__message");
  } else {
    //   check email regex
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regex.test(emailInput)) {
      emailErrorElement.innerText = "Invalid Email.";
      emailErrorElement.classList.add("error__message");
    } else {
      emailErrorElement.classList.remove("error__message");
      validationStatus = true;
    }
  }
  return validationStatus;
}

function validateText(id, errorDisplayId, length, itemName) {
  var validationStatus = false;
  const valueInput = document.getElementById(id).value;
  const valueErrorElement = document.getElementById(errorDisplayId);

  if (valueInput.length <= length) {
    valueErrorElement.innerText = `${itemName} is too short.`;
    valueErrorElement.classList.add("error__message");
  } else {
    valueErrorElement.classList.remove("error__message");
    validationStatus = true;
  }
  return validationStatus;
}

function validatePhone(id, errorDisplayId) {
  var validationStatus = false;
  const phoneNumberInput = document.getElementById(id).value;
  const phoneNumberErrorElement = document.getElementById(errorDisplayId);

  if (phoneNumberInput.length <= 6) {
    phoneNumberErrorElement.innerText = "Phone number is too short.";
    phoneNumberErrorElement.classList.add("error__message");
  } else if (phoneNumberInput.length >= 16) {
    phoneNumberErrorElement.innerText = "Phone number is too long.";
    phoneNumberErrorElement.classList.add("error__message");
  } else {
    phoneNumberErrorElement.classList.remove("error__message");
    validationStatus = true;
  }
  return validationStatus;
}

async function sendEmail(firstName, lastName, email, phone, subject, message) {
  var templateParams = {
    name: firstName + " " + lastName,
    email: email,
    phone: phone,
    subject: subject,
    message: message,
  };

  emailjs
    .send(
      "service_txkdaib",
      "template_lwfl601",
      templateParams,
      "gTool4GJ057LvqAfd"
    )
    .then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
}
export default formValidator;
