console.clear();

const bodyElement = document.querySelector('[data-js="body"]');
const bookmarkButton = document.querySelector('[data-js="bookmark-button"]');
const bookmarkIcon = document.querySelector('[data-js="bookmark-icon"]');

// Bookmark Button switch to active:
bookmarkIcon.addEventListener("click", () => {
  bookmarkIcon.classList.toggle("bookmark-active");
});

// Switch Dark Mode Button On:
// const darkModeButton = document.querySelector('[data-js="dark-mode-button"]');

// darkModeButton.addEventListener("click", () => {
//   bodyElement.classList.toggle("dark");
// });

// Darken navbar sections:
// const navbarButtons = document.querySelector('[data-js="navbar"]');

// const navbarButtonHome = document.querySelector('[data-js="navbar-1"]');
// navbarButtons.addEventListener("click", () => {
//   navbarButtons.classList.add("navbar-highlight");
// });
