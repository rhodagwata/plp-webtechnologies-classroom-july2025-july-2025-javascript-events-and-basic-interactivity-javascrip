// Event Handling
document.getElementById("toggleMessageBtn").addEventListener("click", () => {
  const msg = document.getElementById("message");
  msg.style.display = (msg.style.display === "none") ? "block" : "none";
});

// Interactive Elements
// Light/Dark Mode Toggle
document.getElementById("modeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const btn = document.getElementById("modeToggle");
  btn.textContent = document.body.classList.contains("dark-mode") 
    ? "Switch to Light Mode" 
    : "Switch to Dark Mode";
});

// Counter Game
let count = 0;
document.getElementById("incrementBtn").addEventListener("click", () => {
  count++;
  document.getElementById("counter").textContent = count;
});
document.getElementById("decrementBtn").addEventListener("click", () => {
  count--;
  document.getElementById("counter").textContent = count;
});

// Form Validation
document.getElementById("signupForm").addEventListener("submit", (event) => {
  event.preventDefault(); // prevent page reload

  // Reset error messages
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("passwordError").textContent = "";
  document.getElementById("successMessage").style.display = "none";

  let isValid = true;

  // Validate Name
  const name = document.getElementById("name").value.trim();
  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required.";
    isValid = false;
  }

  // Validate Email
  const email = document.getElementById("email").value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById("emailError").textContent = "Enter a valid email.";
    isValid = false;
  }

  // Validate Password
  const password = document.getElementById("password").value;
  if (password.length < 6) {
    document.getElementById("passwordError").textContent = "Password must be at least 6 characters.";
    isValid = false;
  }

  // Show success message if valid
  if (isValid) {
    document.getElementById("successMessage").style.display = "block";
    document.getElementById("signupForm").reset();
  }
});
