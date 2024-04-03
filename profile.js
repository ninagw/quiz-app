console.clear();

const darkModeButton = document.querySelector('[data-js="dark-mode-button"]');

// Switch Dark Mode Button On/Off:
darkModeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Save preference in local storage:
  const isDarkMode = document.body.classList.contains("dark-mode");
  localStorage.setItem("darkMode", isDarkMode);
});

// Check local storage if preference is dark mode:
const isDarkMode = localStorage.getItem("darkMode") === true;
if (isDarkMode) {
  document.body.classList.add("dark-mode");
}
