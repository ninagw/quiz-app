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

// Darken navbar sections:
// const navbarButtons = document.querySelector('[data-js="navbar"]');

// const navbarButtonHome = document.querySelector('[data-js="navbar-1"]');
// navbarButtons.addEventListener("click", () => {
//   navbarButtons.classList.add("navbar-highlight");
// });

// Nav Bar Animation – example:
const navLinks = document.querySelectorAll('[data-js="nav-links"]');

navLinks.forEach((navLink, index) => {
  navLink.addEventListener("click", () => {
    if (navLink[index].hidden === true) {
      navLink[index].style.backgroundColor = "var(--color-darkgrey)";
    } else {
      navLink[index].style.backgroundColor = "var(--color-darkgrey)";
    }
  });
});

// navLinks.addEventListener("click", (event) => {
// const link = event.target.closest("a");
// if (!link) return;

// // Optional: Add a visual feedback for click action, like changing link color
// link.style.color = "#ff7f50";

// // You can add further actions here, like navigating to the clicked link
// });

// answerButtons.forEach((answerButton, index) => {
//   answerButton.addEventListener("click", () => {
//     if (answers[index].hidden === true) {
//       answers[index].removeAttribute("hidden");
//     } else {
//       answers[index].setAttribute("hidden", "");
//     }
//   });
// });
