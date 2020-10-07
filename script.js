let password = document.querySelector("[type='password']");
let firstName = document.querySelectorAll("[type='text']")[0];
let lastName = document.querySelectorAll("[type='text']")[1];
let email = document.querySelector("[type='email']");
let submitBtn = document.getElementById("submit");

const nameRegex = /[a-zA-Z0-9-]{2,}/;
const emailRegex = /[a-zA-Z-0-9\.]{2,}@[a-zA-Z0-9-\.]{2,}/;
const passwordRegex = /\w{8,}/;

function validate(text, regex) {
  return regex.test(text);
}

submitBtn.addEventListener("click", function (event) {
  event.preventDefault();
  if (password.value) {
    let valid = validate(password.value, passwordRegex);
    if (!valid) {
      password.nextElementSibling.textContent =
        "Password must be at least 8 characters";
      password.id = "input-error";
      password.placeholder = "";
      password.nextElementSibling.classList.toggle("visible");
    } else {
      password.nextElementSibling.textContent = "";
      password.nextElementSibling.classList.toggle("visible");
    }
  } else {
    password.nextElementSibling.textContent = "Password cannot be empty";
    password.nextElementSibling.classList.toggle("visible");
  }

  if (firstName.value) {
    let valid = validate(firstName.value, nameRegex);
    if (!valid) {
      firstName.nextElementSibling.classList.toggle("visible");
      firstName.nextElementSibling.textContent = "Enter a valid First Name";
    } else {
      firstName.nextElementSibling.textContent = "";
      firstName.nextElementSibling.classList.toggle("visible");
    }
  } else {
    firstName.nextElementSibling.classList.toggle("visible");
    firstName.nextElementSibling.textContent = "First Name cannot be empty";
  }

  if (lastName.value) {
    let valid = validate(lastName.value, nameRegex);
    if (!valid) {
      lastName.nextElementSibling.classList.toggle("visible");
      lastName.nextElementSibling.textContent = "Enter a valid Last Name";
    } else {
      lastName.nextElementSibling.textContent = "";
      lastName.nextElementSibling.classList.toggle("visible");
    }
  } else {
    lastName.nextElementSibling.textContent = "Last Name cannot be empty";
    lastName.nextElementSibling.classList.toggle("visible");
  }

  if (email.value) {
    let valid = validate(email.value, emailRegex);
    if (!valid) {
      email.nextElementSibling.classList.toggle("visible");
      email.nextElementSibling.textContent = "Looks like this is not an email";
      email.placeholder = "email@example/com";
    } else {
      email.nextElementSibling.textContent = "";
      email.placeholder = "Email";
      email.nextElementSibling.classList.toggle("visible");
    }
  } else {
    email.nextElementSibling.classList.toggle("visible");
    email.nextElementSibling.textContent = "Looks like this is not an email"
  }
});
