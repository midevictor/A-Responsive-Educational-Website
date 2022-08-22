//change navbar on scroll
window.addEventListener('scroll',() =>{
  document.querySelector('nav').classList.toggle("window-scrolled", window.scrollY > 0);
});

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
  faq.addEventListener('click',() => {
    faq.classList.toggle('open');

    //change icon
    const icon = faq.querySelector('.faq_icon i');
    if(icon.classList.contains('fa-plus')){
      icon.classList.remove('fa-plus');
      icon.classList.add('fa-minus');
    }
    else{
      icon.classList.remove('fa-minus');
      icon.classList.add('fa-plus');
    }
  })
})

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    600:{
      slidesPerView: 2,
      spaceBetween: 40,
    },
    // 1023:{
    //   slidesPerView: 3,
    //   spaceBetween: 60,
    // }
  }
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