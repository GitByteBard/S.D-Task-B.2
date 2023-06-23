// Define constants for all of the elements we will be working with
const form = document.querySelector("#myForm");
const nameInput = document.querySelector("#fullName");
const emailInput = document.querySelector("#emailAddress");
const nameError = document.querySelector("#fullName + .field-error");
const emailError = document.querySelector("#emailAddress + .field-error");

function validateName() {
  if (nameInput.validity.valid) {
    nameError.textContent = "";
  } else {
    showNameError();
  }
}

function showNameError() {
  nameError.textContent = "Please enter your name";
}

function validateEmail() {
  if (emailInput.validity.valid) {
    emailError.textContent = "";
  } else {
    showEmailError();
  }
}

function showEmailError() {
  if (emailInput.validity.valueMissing) {
    emailError.textContent = "Please enter your email address";
  } else if (emailInput.validity.typeMismatch) {
    emailError.textContent = "Your email address does not appear to be correct";
  }
}

function validateForm(event) {
  let formHasErrors = false;
  if (!nameInput.validity.valid) {
    formHasErrors = true;
    showNameError();
  }
  if (!emailInput.validity.valid) {
    formHasErrors = true;
    showEmailError();
  }
  if (formHasErrors) {
    event.preventDefault();
  }
}

nameInput.addEventListener("input", validateName);
emailInput.addEventListener("input", validateEmail);

// Set up an event listener for the form
// The event we are listening for is "submit" (occurs when user trys to submit the form)
form.addEventListener("submit", validateForm);
