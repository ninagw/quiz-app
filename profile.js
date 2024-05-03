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

//-------------- GRIFFINDOR / RED THEME --------------------------------------------------
const griffindorModeButton = document.querySelector(
  '[data-js="griffindor-mode-button"]'
);

// Switch dark mode button on/off
function toggleGriffindorMode() {
  document.body.classList.toggle("griffindor-mode");

  // Save preference to local storage
  const isGriffindorMode = document.body.classList.contains("griffindor-mode");
  localStorage.setItem("griffindorMode", isGriffindorMode);
}

// Check local storage for dark mode preference
const isGriffindorMode = localStorage.getItem("griffindorMode") === "true";
if (isGriffindorMode) {
  document.body.classList.add("griffindor-mode");
}

// Add event listener to the dark mode button
griffindorModeButton.addEventListener("click", toggleGriffindorMode);
