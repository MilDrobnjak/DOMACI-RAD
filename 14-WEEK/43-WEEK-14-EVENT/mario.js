"use strict";
// Selecting DOM elements
const marioStanding = document.querySelector(".mario");
const marioRunning = document.querySelector(".mario_running");
const backgroundImageDiv = document.querySelector(".background");
//Defining global variables
let activeTimer = true;
let timer;
let pos = 0;
//Defining event handler
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") {
    marioStanding.classList.toggle("inactive");
    marioRunning.classList.toggle("inactive");
    activeTimer = !activeTimer;
    if (activeTimer) {
      clearInterval(timer);
    } else {
      timer = setInterval(function () {
        pos--;
        backgroundImageDiv.style.backgroundPositionX = pos * 3 + "px";
      }, 1);
    }
  }
  return timer;
});
