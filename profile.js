const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));

if (!isLoggedIn) {
  window.location.href = "login.html";
}

const displayUsername = document.getElementById("displayUsername");
const displayEmail = document.getElementById("displayEmail");
const displayPhone = document.getElementById("displayPhone");
const displayAddress = document.getElementById("displayAddress");
const displayAge = document.getElementById("displayAge");
const logoutBtn = document.getElementById("logoutBtn");
const deleteAccountBtn = document.getElementById("deleteBtn");

const nameInput = document.getElementById("floatingInputName");
const emailInput = document.getElementById("floatingInputEmail");
const passwordInput = document.getElementById("floatingPassword");
const phoneInput = document.getElementById("floatingPhone");
const ageInput = document.getElementById("floatingAge");
const addressInput = document.getElementById("floatingAddress");
// const confirmPasswordInput = document.getElementById("floatingConfirmPassword");
const registerForm = document.getElementById("registerForm");
const changePasswordForm = document.getElementById("changePasswordForm");

const passwordChangeInput = document.getElementById("floatingChangePassword");
const confirmChangePasswordInput = document.getElementById(
  "floatingConfirmChangePassword"
);

const userCredentials = JSON.parse(localStorage.getItem("user"));

displayUsername.textContent = `${userCredentials.username}`;
displayEmail.textContent = `${userCredentials.email}`;
displayPhone.textContent = `${userCredentials.phone}`;
displayAddress.textContent = `${userCredentials.address}`;
displayAge.textContent = `${userCredentials.age}`;

logoutBtn.addEventListener("click", () => {
  localStorage.setItem("isLoggedIn", "false");
  alert("Logged out");
  window.location.href = "login.html";
});

deleteAccountBtn.addEventListener("click", () => {
  localStorage.setItem("user", "");
  localStorage.setItem("isLoggedIn", "false");
  window.location.href = "login.html";
});

let username = userCredentials.username;
let email = userCredentials.email;
let phone = userCredentials.phone;
let address = userCredentials.address;
let age = userCredentials.age;
let password = "";
let confirmPassword = "";

nameInput.value = userCredentials.username;
emailInput.value = userCredentials.email;
phoneInput.value = userCredentials.phone;
addressInput.value = userCredentials.address;
ageInput.value = userCredentials.age;

nameInput.addEventListener("input", () => {
  username = nameInput.value;
});

emailInput.addEventListener("input", () => {
  email = emailInput.value;
});

phoneInput.addEventListener("input", () => {
  phone = phoneInput.value;
});

addressInput.addEventListener("input", () => {
  address = addressInput.value;
});

ageInput.addEventListener("input", () => {
  age = ageInput.value;
});

passwordInput.addEventListener("input", () => {
  password = passwordInput.value;
});
// confirmPasswordInput.addEventListener("input", () => {
//   confirmPassword = confirmPasswordInput.value;
// });

// UPDATING ACCOUNT FORM SUBMISSION
// I REUSED THE REGISTER FORM FROM REGISTER.JS

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const existingUser = JSON.parse(localStorage.getItem("user"));

  if (password !== existingUser.password) {
    alert("Incorrect password");
    return;
  } else {
    existingUser.username = username;
    existingUser.email = email;
    existingUser.phone = phone;
    existingUser.address = address;
    existingUser.age = age;

    localStorage.setItem("user", JSON.stringify(existingUser));
    alert("Account updated successfully!");
    window.location.reload();
  }
});

// CHANGE PASSWORD

passwordChangeInput.addEventListener("input", () => {
  password = passwordChangeInput.value;
});
confirmChangePasswordInput.addEventListener("input", () => {
  confirmPassword = confirmChangePasswordInput.value;
});

changePasswordForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const existingUser = JSON.parse(localStorage.getItem("user"));

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  } else {
    existingUser.password = password;

    localStorage.setItem("user", JSON.stringify(existingUser));
    alert("Password updated successfully!");
    window.location.reload();
  }
});
