const questionCards = document.querySelectorAll('[data-js="question-card"]');
const bookmarkButtons = document.querySelectorAll(
  '[data-js="bookmark-button"]'
);
const bookmarkIcons = document.querySelectorAll('[data-js="bookmark-icons"]');
const bookmarksPage = document.querySelector('[href="bookmarks.html"]');

document.addEventListener("DOMContentLoaded", () => {
  // Function to update the bookmark status in Local Storage
  const updateLocalStorage = () => {
    const bookmarkedQuestions = [];

    questionCards.forEach((card, index) => {
      if (card.querySelector(".bookmark-active")) {
        bookmarkedQuestions.push(index);
      }
    });

    localStorage.setItem(
      "bookmarkedQuestions",
      JSON.stringify(bookmarkedQuestions)
    );
  };

  // Function to update bookmark icons based on Local Storage data
  const updateBookmarkIcons = () => {
    const bookmarkedQuestions =
      JSON.parse(localStorage.getItem("bookmarkedQuestions")) || [];

    bookmarkIcons.forEach((icon, index) => {
      if (bookmarkedQuestions.includes(index)) {
        icon.classList.add("bookmark-active");
      } else {
        icon.classList.remove("bookmark-active");
      }
    });
  };

  // Function to update bookmarks.html page
  const updateBookmarksPage = () => {
    const bookmarkedQuestions =
      JSON.parse(localStorage.getItem("bookmarkedQuestions")) || [];

    const bookmarksList = bookmarkedQuestions
      .map((index) => {
        return questionCards[index].outerHTML;
      })
      .join("");

    localStorage.setItem("bookmarksPage", bookmarksList);
  };

  // Function to load bookmarks on bookmarks.html page
  const loadBookmarksPage = () => {
    const bookmarksPage = localStorage.getItem("bookmarksPage") || "";
    document.body.innerHTML = bookmarksPage;
  };

  // Initial setup
  updateBookmarkIcons();
  updateLocalStorage();

  // Event listeners
  bookmarkButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      bookmarkIcons[index].classList.toggle("bookmark-active");
      updateLocalStorage();
      if (document.body.classList.contains("bookmarks-page")) {
        updateBookmarksPage();
      }
    });
  });

  bookmarksPage.addEventListener("click", () => {
    updateBookmarksPage();
    document.body.classList.add("bookmarks-page");
  });

  if (window.location.href.includes("bookmarks.html")) {
    loadBookmarksPage();
  }
});
