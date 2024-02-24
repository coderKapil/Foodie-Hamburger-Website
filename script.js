const hamburgerMenu = document.querySelector(".hamburger-menu-container");
const headerContent = document.querySelector(".header-content");
const closeIcon = document.querySelector(".close-icon");
const goto = document.querySelector(".go-to-top");
const mainContent = document.querySelector(".main-content");
const nav = document.querySelector("nav");

hamburgerMenu.addEventListener("click", (e) => {
  // to stop the propagation of event due to event bubbling
  e.stopPropagation();
  headerContent.classList.add("menu-open");
});

nav.addEventListener("click", (e) => {
  // to stop the propagation of event due to event bubbling
  e.stopPropagation();
});

closeIcon.addEventListener("click", () => {
  headerContent.classList.remove("menu-open");
});

goto.addEventListener("click", () => {
  mainContent.scrollTo(0, 0);
});

window.addEventListener("click", () => {
  headerContent.classList.remove("menu-open");
});
