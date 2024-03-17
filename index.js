console.clear();

const bodyElement = document.querySelector('[data-js="body"]');
const questionCard = document.querySelector('[data-js="question-card"]');
const bookmarkButton = document.querySelector('[data-js="bookmark-button"]');
const bookmarkIcons = document.querySelectorAll('[data-js="bookmark-icons"]');
const answerButtons = document.querySelectorAll('[data-js="answer-button"]');
const answer = document.querySelector('[data-js="answer"]');

// Bookmark Button switch to active:
bookmarkIcons.forEach((bookmarkIcon) => {
  bookmarkIcon.addEventListener("click", () => {
    bookmarkIcon.classList.toggle("bookmark-active");
  });
});

// Click answerButton and display/hide answer:
answerButtons.forEach((answerButton) => {
  answerButton.addEventListener("click", () => {
    if (answer.hidden === true) {
      answer.removeAttribute("hidden");
    } else {
      answer.setAttribute("hidden", "");
    }
  });
});

// Darken navbar sections:
// const navbarButtons = document.querySelector('[data-js="navbar"]');

// const navbarButtonHome = document.querySelector('[data-js="navbar-1"]');
// navbarButtons.addEventListener("click", () => {
//   navbarButtons.classList.add("navbar-highlight");
// });
