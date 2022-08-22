
window.addEventListener('scroll',() =>{
  document.querySelector('nav').classList.toggle("window-scrolled", window.scrollY > 0);
});

const menu = document.querySelector(".nav_menu");
const menuBtn = document.getElementById("open-menu-btn");
const closeBtn = document.getElementById("close-menu-btn");

menuBtn.addEventListener("click", () => {
  menu.style.display = "flex";
  closeBtn.style.display = "inline-block";
  menuBtn.style.display = "none";
} );

closeBtn.addEventListener("click", () => {
  menu.style.display = "none";
  closeBtn.style.display = "none";
  menuBtn.style.display = "inline-block";
} );

