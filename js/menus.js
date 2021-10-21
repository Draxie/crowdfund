/*--------------------Burger menu----------------------*/

let burgerMenu = document.getElementById("burgerMenu");
let DDNav = document.getElementById("DDNav");
let navBar = document.getElementById("navBar");
let menuIcon = document.getElementById("menuIcon");
function toggleMenu() {
  if (DDNav.style.display === "none") {
    DDNav.style.display = "flex";
    menuIcon.innerHTML = '<img src="/images/icon-close-menu.svg" alt="">';
    navBar.style.backgroundColor = "rgba(0, 0, 0, .8)";
  } else {
    DDNav.style.display = "none";
    navBar.style.background = "none";
    menuIcon.innerHTML = '<img src="/images/icon-hamburger.svg" alt="">';
  }
}

/*--------------------Backing form----------------------*/

let backButton = document.getElementById("back-button");
let closeButton = document.getElementById("close-button");
let form = document.getElementById("back-form");
let selectRewards = document.querySelectorAll("#select-button");

backButton.addEventListener("click", function () {
  if (hasBacked) {
    backButton.innerHTML = "Already backed";
    setTimeout(function () {
      backButton.innerHTML = "Back this project";
    }, 2000);
  } else form.classList.toggle("closed");
});

closeButton.addEventListener("click", function () {
  form.classList.toggle("closed");
});

selectRewards.forEach((selector) =>
  selector.addEventListener("click", () => {
    if (hasBacked) {
      selector.innerHTML = "Already backed";
      setTimeout(function () {
        selector.innerHTML = "Back this project";
      }, 2000);
    } else form.classList.toggle("closed");
  })
);

/*--------------------Bookmark----------------------*/

let bookmarkBtn = document.getElementById("bookmark-button");
let buttonText = document.getElementById("button-text");
let bookmarked;

function Bookmark() {
  if (bookmarked) {
    bookmarkBtn.classList.remove("bookmarked");
    buttonText.innerHTML = "Bookmark";
    bookmarked = false;
  } else {
    bookmarkBtn.classList.add("bookmarked");
    buttonText.innerHTML = "Bookmarked";
    bookmarked = true;
  }
}

/*--------------------Thanks form----------------------*/

let thanksForm = document.getElementById("thanks-form");

function CloseForm() {
  thanksForm.classList.toggle("closed");
}
