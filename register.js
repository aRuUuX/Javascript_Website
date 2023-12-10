const nameInput = document.getElementById("floatingInputName");
const emailInput = document.getElementById("floatingInputEmail");
const ageInput = document.getElementById("floatingInputAge");
const addressInput = document.getElementById("floatingInputAddress");
const phoneInput = document.getElementById("floatingInputPhone");
const passwordInput = document.getElementById("floatingPassword");
const confirmPasswordInput = document.getElementById("floatingConfirmPassword");
const registerForm = document.getElementById("registerForm");
const agreeCheckbox = document.getElementById('agree-term');

let username = "";
let email = "";
let age = "";
let address = "";
let phone = "";
let password = "";
let confirmPassword = "";

nameInput.addEventListener("input", () => {
  username = nameInput.value;
});

emailInput.addEventListener("input", () => {
  email = emailInput.value;
});

ageInput.addEventListener("input", () => {
  age = ageInput.value;
});

addressInput.addEventListener("input", () => {
  address = addressInput.value;
});

phoneInput.addEventListener("input", () => {
  phone = phoneInput.value;
});

passwordInput.addEventListener("input", () => {
  password = passwordInput.value;
});

confirmPasswordInput.addEventListener("input", () => {
  confirmPassword = confirmPasswordInput.value;
});

// REGISTER FORM SUBMISSION

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  } else if (!nameInput.value ||
    !emailInput.value ||
    !phoneInput.value ||
    !ageInput.value ||
    !addressInput.value ||
    !passwordInput.value ||
    !confirmPasswordInput.value) {
  alert('Please fill in all the required fields.');// Prevent the form from being submitted
  } else if (!agreeCheckbox.checked) {
    alert('Please agree to the terms before submitting the form.'); // Prevent the form from being submitted
    }
  else {
    localStorage.setItem("user", JSON.stringify({ username, email, age, phone, address, password }));

    alert("Successfully registered! You may now login.");
    window.location.href = "login.html";
  }
});
