"use strict";

const overlay_BtnA = document.querySelector(".signA");
const overlay_BtnB= document.querySelector(".signB");
const overlay = document.querySelector(".login_overlay");
let btnActive;

function togglerightBg() {
  btnActive = true;
  if (btnActive) {
    overlay.style.transform = "translateX(-100%)";
    overlay.style.borderRadius = "1.45em 0 0 1.45em";
    overlay.style.background = "url('../images/overflow_A.jpg') right";
    overlay.style.backgroundSize = "cover";
    overlay.style.backgroundAttachment = "fixed";
    overlay.style.backgroundPosition = "right";
    overlay.style.width = "50%";
    overlay.style.height = "100%";
    overlay.style.position = "absolute";
    overlay.style.right = "0";
    overlay.style.top = "0";
    overlay_BtnA.style.display = "none";
    overlay_BtnB.style.display = "block";
  }
}

function toggleLeftBg() {
  btnActive = false;
  if (!btnActive) {
    overlay.style.transform = "translateX(0)";
    overlay.style.borderRadius = " 0 1.45em 1.45em 0";
  overlay.style.background = "url('../images/overflow_A.jpg') right";
  overlay.style.backgroundSize = "cover";
  overlay.style.backgroundAttachment = "fixed";
  overlay.style.backgroundPosition = "right";
  overlay.style.width = "50%";
  overlay.style.height = "100%";
  overlay.style.position = "absolute";
  overlay.style.right = "0";
  overlay.style.top = "0";
  overlay_BtnA.style.display = "block";
  overlay_BtnB.style.display = "none";
}
}
overlay_BtnA.addEventListener("click", togglerightBg);
overlay_BtnB.addEventListener("click", toggleLeftBg);
