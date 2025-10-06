const mobileMenuToggle = document.querySelector('.site-header__toggle');
const mobileMenu = document.querySelector('.site-header__wrapper');
const body = document.querySelector('body');

mobileMenuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
  mobileMenuToggle.classList.toggle('open');
  body.classList.toggle('overflow-hidden');
});

let swiperHero = new Swiper(".hero__swiper", {
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
});

var swiper = new Swiper(".clients__swiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
        el: ".clients__swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".clients__swiper-button--next",
        prevEl: ".clients__swiper-button--prev",
      },
});