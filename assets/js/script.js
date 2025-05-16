// globalNav
const btnOpenNav = document.getElementById("js-btn-open-nav");
const globalNav = document.getElementById("globalNav");

btnOpenNav.addEventListener("click", (e) => {
  e.preventDefault();

  btnOpenNav.classList.toggle("is-active");
  globalNav.classList.toggle("is-active");
  document.body.classList.toggle("is-active");
});

// swiper
const swiper = new Swiper(".swiper", {
  loop: true,

  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },

  pagination: {
    el: ".swiper-pagination",
  },

  autoplay: {
    delay: 3000,
  },
});
