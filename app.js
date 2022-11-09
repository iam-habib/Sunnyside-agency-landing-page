const mobileMenu = document.querySelector(".mobile_menu");
const navMobile = document.querySelector(".nav_list");
const menu = document.querySelector(".nmenu");
mobileMenu.addEventListener("click", function () {
  navMobile.classList.toggle("menu");
});
