console.clear();

const bodyElement = document.querySelector('[data-js="body"]');
const questionCard = document.querySelector('[data-js="question-card"]');
const bookmarkButton = document.querySelector('[data-js="bookmark-button"]');
const bookmarkIcon = document.querySelector('[data-js="bookmark-icon"]');
const bookmarkIcons = document.querySelectorAll('[data-js="bookmark-icons"]');
const answerButton = document.querySelector('[data-js="answer-button"]');
const answer = document.querySelector('[data-js="answer"]');

// Bookmark Button switch to active:
bookmarkIcons.forEach((bookmarkIcon) => {
  bookmarkIcon.addEventListener("click", () => {
    bookmarkIcon.classList.toggle("bookmark-active");
  });
});

// JANAS ANSATZ:
// bookmark_buttons.forEach((bookmark_button) => {
//   bookmark_button.addEventListener("click", () => {
//     bookmark_button.classList.toggle("bookmarkChecked");
//   });
// });

// Click answerButton and display/hide answer:
answerButton.addEventListener("click", () => {
  if (answer.hidden === true) {
    answer.removeAttribute("hidden");
  } else {
    answer.setAttribute("hidden", "");
  }
});

// Darken navbar sections:
// const navbarButtons = document.querySelector('[data-js="navbar"]');

// const navbarButtonHome = document.querySelector('[data-js="navbar-1"]');
// navbarButtons.addEventListener("click", () => {
//   navbarButtons.classList.add("navbar-highlight");
// });
