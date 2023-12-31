let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword");
let loginForm = document.querySelector(".login-form");
let signupForm = document.querySelector(".signup-form");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  validateLogin();
});

function setError(element, message) {
  const inputControl = element;
  const errorDisplay = inputControl.nextElementSibling;

  errorDisplay.textContent = message;
  inputControl.classList.add("error");
}

function setSuccess(element) {
  const inputControl = element;
  const successDisplay = inputControl.nextElementSibling;

  successDisplay.textContent = "";
  inputControl.classList.remove("error");
}

function validateLogin() {
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (emailValue === "") {
    setError(email, "Email is required");
  } else if (emailValue.includes("@") === false) {
    setError(email, "Email address should have an @");
  } else setSuccess(email);

  if (passwordValue === "") {
    setError(password, "Password is required");
  } else if (passwordValue.length < 8) {
    setError(password, "Password should be 8 or more characters.");
  } else setSuccess(password);
}
