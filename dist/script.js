const toggleMenu = document.querySelector(".toggle__menu");
const headerNav = document.querySelector(".header__nav");
toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("open");
  headerNav.classList.toggle("open");
});

const dropp = document.querySelectorAll(".drop__down");
dropp.forEach((dropps) => {
  dropps.addEventListener("click", () => {
    dropps.nextElementSibling.classList.toggle("open");
    dropps.querySelector("span").classList.toggle("open");
  });
});
