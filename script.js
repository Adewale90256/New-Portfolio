"use strict";
const hidden = document.getElementById("js-hidden");
const view = document.getElementById("js-view");
const closeBtn = document.getElementById("js-close");

hidden.addEventListener("click", () => {
  view.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
  view.classList.add("hidden");
});

console.log(view);
console.log(hidden);

function fadeInOnScroll() {
  const sections = document.querySelectorAll(".fade-section");
  const triggerBottom = window.innerHeight * 0.85; //Adjust trigger height

  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
      section.classList.remove("opacity-0", "translate-y-10");
      section.classList.add("animate-fade-in");
    }
  });
}

window.addEventListener("scroll", fadeInOnScroll);
fadeInOnScroll();
