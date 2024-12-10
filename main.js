/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/popover/popover.js
class Popover {
  constructor(parentElem) {
    this.parentElem = parentElem;
    this.bindtoDOM = this.bindtoDOM.bind(this);
  }
  bindtoDOM() {
    const btn = document.createElement("button");
    btn.classList.add("clicker_button");
    btn.textContent = "CLICK HERE";
    const popover = document.createElement('div');
    popover.classList.add("popover");
    popover.classList.add("unvisible");
    popover.innerHTML = "<h3>Title</h3><p>text popover</p>";
    this.parentElem.appendChild(btn);
    this.parentElem.appendChild(popover);
    btn.addEventListener("click", () => {
      popover.classList.toggle("unvisible");
    });
  }
}
;// CONCATENATED MODULE: ./src/js/app.js

const forTest = () => {
  return 1;
};
const popover = new Popover(document.body);
popover.bindtoDOM();
;// CONCATENATED MODULE: ./src/index.js



// TODO: write your code in app.js
/******/ })()
;