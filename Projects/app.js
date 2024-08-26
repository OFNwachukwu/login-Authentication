const form = document.getElementById("form");
const firstname = document.getElementById("first-name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirm_password = document.getElementById("confirm-password");
const error_message = document.getElementById("error-message");

form.addEventListener("submit", (e) => {
  let errors = [];

  // Check if all form elements are present
  if (firstname && email && password && confirm_password) {
    errors = getSignupFormErrors(
      firstname.value,
      email.value,
      password.value,
      confirm_password.value
    );
  } else {
    errors = getLoginFormErrors(email.value, password.value); // If you need to handle login errors
  }
  if (errors.length > 0) {
    e.preventDefault();
    error_message.innerText = errors.join(". ");
  }
});

function getSignupFormErrors(firstname, email, password, confirm_password) {
  let errors = [];

  // Clear previous error states
  if (firstname === "" || firstname == null) {
    errors.push("Firstname is required");
    if (firstnameElement) firstname.parentElement.classList.add("Incorrect");
  } else {
    if (firstnameElement) firstname.parentElement.classList.remove("Incorrect");
  }

  if (email === "" || email == null) {
    errors.push("Email is required");
    if (emailElement) email.parentElement.classList.add("Incorrect");
  } else {
    if (emailElement) email.parentElement.classList.remove("Incorrect");
  }

  if (password === "" || password == null) {
    errors.push("Password is required");
    if (passwordElement) password.parentElement.classList.add("Incorrect");
  } else {
    if (passwordElement) password.parentElement.classList.remove("Incorrect");
  }
  
  if (password.length < 8) {
    errors.push("Password must have at least 8 characters");
    if (passwordElement) password.parentElement.classList.add("Incorrect");
  }

  if (password !== confirm_password) {
    errors.push("Passwords do not match");
    if (confirmPasswordElement) confirm_password.parentElement.classList.add("Incorrect");
  } else {
    if (confirmPasswordElement) confirm_password.parentElement.classList.remove("Incorrect");
  }

  return errors;
}

function getLoginFormErrors(email, password) {
  let errors = [];
  if (email === "" || email == null) {
    errors.push("Email is required");
    if (emailElement) email.parentElement.classList.add("Incorrect");
  } else {
    if (emailElement) email.parentElement.classList.remove("Incorrect");
  }

  if (password === "" || password == null) {
    errors.push("Password is required");
    if (passwordElement) password.parentElement.classList.add("Incorrect");
  } else {
    if (passwordElement) password.parentElement.classList.remove("Incorrect");
  }

  return errors;
}

const allInputs = [firstname, email, password, confirm_password].filter(input => input != null);

allInputs.forEach((input) => {
  input.addEventListener("input", () => {
    if (input.parentElement && input.parentElement.classList.contains("Incorrect")) {
      input.parentElement.classList.remove("Incorrect");
      error_message.innerText = "";
    }
  });
});
