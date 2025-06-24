/** @format */
"use strict";

const counts = document.querySelectorAll(".count");
const speed = 50;
counts.forEach((counter) => {
  function upData() {
    const target = Number(counter.getAttribute("data-target"));
    const count = Number(counter.innerText);
    const incs = target / speed;
    if (count < target) {
      counter.innerText = Math.floor(incs + count);
      setTimeout(upData, 1);
    } else {
      counter.innerText = target;
    }
  }
  upData();
});

const nav = document.querySelector(".nav");
const btnNav = document.querySelector(".nav-btn-box");
const over = document.querySelector(".overlay");

btnNav.addEventListener("click", function (e) {
  nav.classList.toggle("navs");
});

const navs = document.querySelectorAll(".navList");

navs.forEach((button) => {
  button.addEventListener("click", function () {
    nav.classList.remove("navs");
    navs.forEach((clicker) => clicker.classList.remove("navActive"));

    button.classList.add("navActive");
  });
});

// SECTION REAVEAL
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");
  const revealSection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  };
  const observer = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.1,
  });
  sections.forEach((section) => observer.observe(section));
});
