"use strict";
const crossElement = document.querySelector(".modal__cross");
const modalElement = document.querySelector(".modal");
const aboutContainerContents = document.querySelectorAll(
  ".about__container__content"
);
/////////////////////////////////////////////////
window.setTimeout(function () {
  console.log("window_modal");
  modalElement.classList.remove("hidden");
}, 2000);
crossElement.addEventListener("click", function () {
  console.log("cross");
  modalElement.classList.add("hidden");
});
/*document.addEventListener("keydown", function (e) {
  console.log(e);
  if (e.key === "Escape") console.log("ESC");
});*/
///////////////////////////////////////////////////
const optionsobserver = {
  root: null,
  threshold: 0.3,
};
const observer = new IntersectionObserver(function (entries) {
  const [entry] = entries;
  console.log(entry);
  entry.target.classList.remove("content--hidden");
  entry.target.classList.add("content--show");
}, optionsobserver);
aboutContainerContents.forEach((target) => observer.observe(target));
