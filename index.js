console.clear();

const bodyElement = document.querySelector('[data-js="body"]');
const questionCard = document.querySelector('[data-js="question-card"]');
const bookmarkButton = document.querySelector('[data-js="bookmark-button"]');
const bookmarkIcon = document.querySelector('[data-js="bookmark-icon"]');
const answerButton = document.querySelector('[data-js="answer-button"]');
const answer = document.querySelector('[data-js="answer"]');

// Bookmark Button switch to active:
bookmarkIcon.addEventListener("click", () => {
  bookmarkIcon.classList.toggle("bookmark-active");
});

// Click answerButton and display/hide answer:
answerButton.addEventListener("click", () => {
  if (answer.hidden === true) {
    answer.removeAttribute("hidden");
  } else {
    answer.setAttribute("hidden", "");
  }
  // const showAnswer = document.createElement("div"); // create div
  // questionCard.append(showAnswer); // position new div-element to button-element which we declared as const answerButton
  // showAnswer.classList.add("hidden"); // style new div-element with css-class .hidden
  // showAnswer.textContent = "The answer is: lorem ipsum dolor"; // add text to new div-element

  // answer.classList.toggle("hidden");
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
