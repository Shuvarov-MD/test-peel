

document.addEventListener('DOMContentLoaded', function () {
  const toggles = document.querySelectorAll('.site-navigation__toggle');
  toggles.forEach(function (toggle) {
    toggle.addEventListener('click', function () {
      const parentItem = toggle.closest('.site-navigation__item--children');
      const sublist = parentItem.querySelector('.site-navigation__sublist');

      // Закрыть все открытые подменю, кроме текущего
      document.querySelectorAll('.site-navigation__sublist.open').forEach(function (openSublist) {
        if (openSublist !== sublist) {
          openSublist.classList.remove('open');
        }
      });
      // Переключить текущее подменю
      sublist.classList.toggle('open');
    });
  });

  const navigationToggles = document.querySelectorAll('.site-footer__navigation-toggle');
  navigationToggles.forEach(function (toggle) {
    toggle.addEventListener('click', function () {
      const parentItem = toggle.closest('.site-footer__navigation-item--children');
      const sublist = parentItem.querySelector('.site-footer__navigation-sublist');

      // Закрыть все открытые подменю, кроме текущего
      document.querySelectorAll('.site-footer__navigation-sublist.open').forEach(function (openSublist) {
        if (openSublist !== sublist) {
          openSublist.classList.remove('open');
        }
      });

      // Переключить текущее подменю
      sublist.classList.toggle('open');
    });
  });


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

const swiperClients = new Swiper(".clients__slider", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".clients__pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".clients__button-next",
      prevEl: ".clients__button-prev",
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 4,
      }
    }
});

let swiperExamples = new Swiper(".examples__swiper", {
    slidesPerView: 1,
    // spaceBetween: 30,
    navigation: {
      nextEl: ".examples__swiper-button.swiper-button-next",
      prevEl: ".examples__swiper-button.swiper-button-prev",
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
});

let swiperModelingSteps = new Swiper(".modeling-steps__slider", {
  // direction: "vertical",
  mousewheel: true,
});
});
