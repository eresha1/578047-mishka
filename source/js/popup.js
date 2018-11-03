var link = document.querySelectorAll(".card__buy--cart");
var popup = document.querySelector(".modal");
var overlay = document.querySelector(".modal__overlay");


if (link !== null) {
  for (var i = 0; i < link.length; i++) {
    link[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      popup.classList.add("modal--show");
      overlay.classList.add("modal__overlay--show");
    });
  }
}

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal--show")) {
      popup.classList.remove("modal--show");
      overlay.classList.remove("modal__overlay--show");
    }
  }
});

overlay.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal--show");
  overlay.classList.remove("modal__overlay--show");
});
