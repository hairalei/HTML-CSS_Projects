"use strict";

////Footer
const year = document.querySelector(".year");
year.textContent = new Date().getFullYear();

/////NAV
const headerNav = document.querySelector(".header");

function openNav() {
  headerNav.classList.toggle("nav-open");
}

const btnNav = document.querySelector(".btn-mobile-nav");

btnNav.addEventListener("click", openNav);

////close nav when link is clicked

headerNav.addEventListener("click", function (e) {
  //   console.log(e.target.classList);
  if (!e.target.classList.contains("nav_link")) return;

  headerNav.classList.remove("nav-open");
});
