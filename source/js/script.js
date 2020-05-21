"use strict";

const pageHeader = document.querySelector(".page-header");
// без включенного js меню будет показано по умолчанию
pageHeader.classList.add("page-header--closed");
const buttonToggle = document.querySelector(".page-header__toggle");
buttonToggle.addEventListener("click", function (evt) {
  evt.preventDefault();
  buttonToggle.classList.toggle("page-header__toggle--active");
  console.log("pageHeader", pageHeader);

  pageHeader.classList.toggle("page-header--closed");
});


let popup = document.querySelector(".modal");
let buttonAddPopup = document.querySelector(".js-popup");
const modalPopup =  document.querySelector(".modal--popup");

  buttonAddPopup.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal--closed");
  });

modalPopup.addEventListener("click", function (evt) {
  if (evt.target.classList.contains("modal")) {
    evt.target.classList.add("modal--closed");
  }
});



/*
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (!popup) return;
    if (!popup.classList.contains("modal--closed")) {
      evt.preventDefault();
      popup.classList.add("modal--closed");
    };
  };
});*/


