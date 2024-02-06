console.clear();

const bodyElement = document.querySelector('[data-js="body"]');

// Switch Dark Mode Button On:
const darkModeButton = document.querySelector('[data-js="dark-mode-button"]');

darkModeButton.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
});
