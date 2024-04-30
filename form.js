console.clear();

const form = document.querySelector('[data-js="form"]');
const submitButton = document.querySelector('[data-js="submit-button"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Read all entered data from the input fields:
  const question = event.target.elements.questionInput.value;
  const answer = event.target.elements.answerInput.value;

  // generate all DOM elements for new card:
  const newQuestionCard = document.createElement("section");
  newQuestionCard.classList.add("question-cards");
  newQuestionCard.classList.add("flex");

  const newQuestion = document.createElement("p");
  newQuestion.textContent = question; // implement the new input question, Zeile 10

  const newAnswerButton = document.createElement("button");
  newAnswerButton.textContent = "Show Answer";
  newAnswerButton.addEventListener("click", () => {
    if (newAnswer.hidden === true) {
      newAnswer.removeAttribute("hidden");
    } else {
      newAnswer.setAttribute("hidden", "");
    }
  });

  const newAnswer = document.createElement("p");
  newAnswer.classList.add("answer");
  newAnswer.setAttribute("hidden", "");
  newAnswer.textContent = answer; // implement the new input answer, Zeile 11

  const newQuestionCardBookmarkButton = document.createElement("div");
  newQuestionCardBookmarkButton.classList.add("question-card-button-bookmark");

  const newBookmarkButton = document.createElement("button");
  newBookmarkButton.classList.add("bookmark-button");

  const newBookmarkIcon = document.createElement("span");
  newBookmarkIcon.classList.add("bookmark-empty");
  newBookmarkIcon.addEventListener("click", () => {
    newBookmarkIcon.classList.toggle("bookmark-active");
  });

  // ------- append card to form.html ---------- //
  document.body.append(newQuestionCard);
  newQuestionCard.append(newQuestion);
  newQuestionCard.append(newAnswerButton);
  newQuestionCard.append(newAnswer);
  newQuestionCard.append(newQuestionCardBookmarkButton);
  newQuestionCardBookmarkButton.append(newBookmarkButton);
  newBookmarkButton.append(newBookmarkIcon);

  // ------- reset input fields ---------- //
  event.target.reset();
  event.target.questionInput.focus();
  charactersLeftQuestion.textContent = 150;
  charactersLeftAnswer.textContent = 150;
});

// --------- COUNT CHARACTERS LEFT ----- //

// --- characters of question input: --- //
const questionInput = document.querySelector('[data-js="question-input"]');
const charactersLeftQuestion = document.querySelector(
  '[data-js="characters-left-question"]'
);

questionInput.addEventListener("input", () => {
  const maxLengthQuestion = 150;
  const remainingCharactersLeftQuestion =
    maxLengthQuestion - questionInput.value.length;
  charactersLeftQuestion.textContent = remainingCharactersLeftQuestion;
});

// --- characters of answer input: --- //
const answerInput = document.querySelector('[data-js="answer-input"]');
const charactersLeftAnswer = document.querySelector(
  '[data-js="characters-left-answer"]'
);
answerInput.addEventListener("input", () => {
  const maxLengthAnswer = 150;
  const remainingCharactersLeftAnswer =
    maxLengthAnswer - answerInput.value.length;
  charactersLeftAnswer.textContent = remainingCharactersLeftAnswer;
});
