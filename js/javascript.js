const btnBurger = document.querySelector("#btnBurger");
const body = document.querySelector("body");
const maintTitle = document.querySelector(".main-title");
const overlayer = document.querySelector(".overlayer");
const fadeElements = document.querySelectorAll(".has-fade");

btnBurger.addEventListener("click", function () {
  console.log("open burger");
  if (maintTitle.classList.contains("open")) {
    body.classList.remove("block-scroll");
    maintTitle.classList.remove("open");
    fadeElements.forEach(function (element) {
      element.classList.remove("fade-in");
      element.classList.add("fade-out");
    });
  } else {
    body.classList.add("block-scroll");
    maintTitle.classList.add("open");
    fadeElements.forEach(function (element) {
      element.classList.remove("fade-out");
      element.classList.add("fade-in");
    });
  }
});
