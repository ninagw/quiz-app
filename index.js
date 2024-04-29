console.clear();

const bodyElement = document.querySelector('[data-js="body"]');
const questionCard = document.querySelector('[data-js="question-card"]');
const bookmarkButton = document.querySelector('[data-js="bookmark-button"]');
const bookmarkIcons = document.querySelectorAll('[data-js="bookmark-icons"]');
const answerButtons = document.querySelectorAll('[data-js="answer-buttons"]');
const answers = document.querySelectorAll('[data-js="answer"]');

// Bookmark Button switch to active:
bookmarkIcons.forEach((bookmarkIcon) => {
  bookmarkIcon.addEventListener("click", () => {
    bookmarkIcon.classList.toggle("bookmark-active");
  });
});

// Click answerButton and display/hide answer:
answerButtons.forEach((answerButton, index) => {
  answerButton.addEventListener("click", () => {
    if (answers[index].hidden === true) {
      answers[index].removeAttribute("hidden");
    } else {
      answers[index].setAttribute("hidden", "");
    }
  });
});
