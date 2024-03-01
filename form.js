console.clear();

const form = document.querySelector('[data-js="form"]');
const submitButton = document.querySelector('[data-js="submit-button"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  //Read all entered data from the input fields:
  const question = event.target.elements.questionInput.value;
  const answer = event.target.elements.answerInput.value;

  // generate all DOM elements for new card:
  const newQuestionCard = document.createElement("section");
  newQuestionCard.classList.add("question-cards");
  newQuestionCard.classList.add("flex");
  const newQuestion = document.createElement("p");
  newQuestion.textContent = question; // implement "const question" Zeile 10
  const newAnswerButton = document.createElement("button");
  newAnswerButton.textContent = "Show Answer";
  const newAnswer = document.createElement("p");
  newAnswer.classList.add("answer");
  newAnswer.setAttribute("hidden", "");
  newAnswer.textContent = answer; // implement "const answer" Zeile 11
  const newQuestionCardBookmarkButton = document.createElement("div");
  newQuestionCardBookmarkButton.classList.add("question-card-button-bookmark");
  const newBookmarkButton = document.createElement("button");
  newBookmarkButton.classList.add("bookmark-button");
  const newBookmarkIcon = document.createElement("span");
  newBookmarkIcon.classList.add("bookmark-empty");

  // append card to form.html
  document.body.append(newQuestionCard);
  newQuestionCard.append(newQuestion);
  newQuestionCard.append(newAnswerButton);
  newQuestionCard.append(newAnswer);
  newQuestionCard.append(newQuestionCardBookmarkButton);
  newQuestionCardBookmarkButton.append(newBookmarkButton);
  newBookmarkButton.append(newBookmarkIcon);

  event.target.reset();
  event.target.questionInput.focus();
});
