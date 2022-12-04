const menuOverlay = document.querySelector(".page-header__menu-mobile");
const closeMenuButton = document.querySelector(".page-header__exit-btn");
const openMenuBtn = document.querySelector(".page-header__mobile-btn");

openMenuBtn.addEventListener("click", (e) => {
  menuOverlay.classList.remove("d-none");
});

closeMenuButton.addEventListener("click", (e) => {
  menuOverlay.classList.add("d-none");
});
