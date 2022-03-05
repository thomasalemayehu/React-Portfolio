import DOMPurify from "dompurify"
function formValidator() {
  /*
        ========================================
        First Name Validation
        ========================================
    */
  const validFirstName = validateName(
    "FirstName",
    "FirstNameErrorMessage",
    "First name"
  );

  /*
        ========================================
        Last Name Validation
        ========================================
    */
  var validateLastName = true;
  if (document.getElementById("LastName").value) {
    validateLastName = validateName(
      "LastName",
      "LastNameErrorMessage",
      "Last name"
    );
  }

  const emailValidate = validateEmail("Email", "EmailErrorMessage");

  // Validate Email
  //   const emailInput = document.getElementById("Email").value;
  //   const emailErrorElement = document.getElementById("EmailErrorMessage");
  // Validate Phone Number
  //   const phoneNumberInput = document.getElementById("Phone").value;
  //   const phoneNumberErrorElement = document.getElementById("PhoneErrorMessage");
  // Validate Subject
  //   const subjectInput = document.getElementById("Subject").value;
  //   const subjectErrorElement = document.getElementById("SubjectErrorMessage");
  // Validate Message
  //   const messageInput = document.getElementById("Message").value;
  //   const messageErrorElement = document.getElementById("MessageErrorMessage");
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


function validateText()
export default formValidator;
