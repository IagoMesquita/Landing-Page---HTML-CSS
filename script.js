var swiper = new Swiper(".mySwiper", {
  // mobile
  slidesPerView: 1,
  spaceBetween: 30,
  freeMode: true,
  breakpoints: {
    // when window width is >= 320px (como funciona os breackpoints)
    // tablet
    768: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    // laptop
    1024: {
      slidesPerView: 3,
      spaceBetween: 200,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  
});
