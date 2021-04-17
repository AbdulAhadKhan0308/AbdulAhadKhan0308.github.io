"use strict";
const crossElement = document.querySelector(".close");
const dialogElement = document.getElementById("dialog1");
window.setTimeout(function () {
  console.log("w");
  const dialogElement = document.getElementById("dialog1");
  dialogElement.classList.remove("hidden");
  dialogElement.showModal();
}, 2000);
crossElement.addEventListener("click", function () {
  const dialogElement = document.getElementById("dialog1");
  dialogElement.classList.add("hidden");
});
/*document.addEventListener("keydown", function (e) {
  console.log(e);
  if (e.key === "Escape") console.log("ESC");
});*/
