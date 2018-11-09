var navMain = document.querySelector(".main-nav__wrapper");
var navToggle = document.querySelector(".main-nav__toggle");


if (navMain.classList.contains("main-nav__wrapper--opened")) {
  navMain.classList.remove("main-nav__wrapper--opened");
  navMain.classList.add("main-nav__wrapper--closed");
  navToggle.classList.add("main-nav__toggle--closed");
}

if (navToggle) {
navToggle.addEventListener("click", function (event) {
  navMain.classList.toggle("main-nav__wrapper--opened");
  navToggle.classList.toggle("main-nav__toggle--closed");
  navMain.classList.toggle("main-nav__wrapper--closed");
  navToggle.classList.toggle("main-nav__toggle--opened");
  });
}

svg4everybody();
