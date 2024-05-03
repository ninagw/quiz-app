console.clear();

//-------------- DARK MODE -----------------
const darkModeButton = document.querySelector('[data-js="dark-mode-button"]');

// Switch dark mode button on/off
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");

  // Save preference to local storage
  const isDarkMode = document.body.classList.contains("dark-mode");
  localStorage.setItem("darkMode", isDarkMode);
}

// Check local storage for dark mode preference
const isDarkMode = localStorage.getItem("darkMode") === "true";
if (isDarkMode) {
  document.body.classList.add("dark-mode");
}

// Add event listener to the dark mode button
darkModeButton.addEventListener("click", toggleDarkMode);

//-------------- GRIFFINDOR / RED THEME -----------------
const redModeButton = document.querySelector('[data-js="dark-mode-button"]');

// Switch dark mode button on/off
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");

  // Save preference to local storage
  const isDarkMode = document.body.classList.contains("dark-mode");
  localStorage.setItem("darkMode", isDarkMode);
}

// Check local storage for dark mode preference
const isDarkMode = localStorage.getItem("darkMode") === "true";
if (isDarkMode) {
  document.body.classList.add("dark-mode");
}

// Add event listener to the dark mode button
darkModeButton.addEventListener("click", toggleDarkMode);
