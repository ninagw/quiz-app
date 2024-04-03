// console.clear();

// const darkModeButton = document.querySelector('[data-js="dark-mode-button"]');

// // Switch Dark Mode Button On/Off:
// darkModeButton.addEventListener("click", () => {
//   document.body.classList.toggle("dark-mode");

//   // Save preference in local storage:
//   const isDarkMode = document.body.classList.contains("dark-mode");
//   localStorage.setItem("darkMode", isDarkMode);
// });

// // Check local storage if preference is dark mode:
// const isDarkMode = localStorage.getItem("darkMode") === true;
// if (isDarkMode) {
//   document.body.classList.add("dark-mode");
// }

const darkModeButton = document.querySelector('[data-js="dark-mode-button"]');

// Function to toggle dark mode
function toggleDarkMode() {
  // Toggle dark mode class on body
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
