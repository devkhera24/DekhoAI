const container = document.querySelector('.auth-container');
const showSignup = document.getElementById('show-signup');
const showLogin = document.getElementById('show-login');

showSignup.addEventListener('click', (e) => {
  e.preventDefault();
  container.classList.add("signup-mode");
});

showLogin.addEventListener('click', (e) => {
  e.preventDefault();
  container.classList.remove("signup-mode");
});
// Select the login form
const loginForm = document.querySelector('.form-box.login form');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault(); // stop default page refresh
  // (you can add login validation here if needed)
  window.location.href = "main.html"; // redirect to main.html
});


