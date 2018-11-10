var link = document.querySelectorAll(".card__buy-cart");
var popup = document.querySelector(".modal__wrapper");
var overlay = document.querySelector(".modal__overlay");
var orderButton = document.querySelector(".goods-week__order");

if (orderButton) {
  orderButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal__wrapper--show");
    overlay.classList.add("modal__overlay--show");
  });
}

if (link !== null) {
  for (var i = 0; i < link.length; i++) {
    link[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      popup.classList.add("modal__wrapper--show");
      overlay.classList.add("modal__overlay--show");
    });
  }
}

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal__wrapper--show")) {
      popup.classList.remove("modal__wrapper--show");
      overlay.classList.remove("modal__overlay--show");
    }
  }
});

overlay.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal__wrapper--show");
  overlay.classList.remove("modal__overlay--show");
});
