console.clear();

function toggleDarkMode() {
  const darkModeButton = document.querySelector('[data-js="dark-mode-button"]');

  // Switch Dark Mode Button On/Off:
  darkModeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
}
