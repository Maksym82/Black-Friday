"use strict";

document.addEventListener("click", documentClick);

function documentClick(e) {
  const targetItem = e.target;
  console.log(targetItem);
  if (targetItem.closest(".icon-menu")) {
    document.documentElement.classList.toggle("menu-open");
  } else if (targetItem.closest(".menu__link")) {
    document.documentElement.classList.toggle("menu-open");
  }
}

// Swiper section Advantages
const swiper = new Swiper(".slider-advantages", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  grabCursor: true,
  slidesPerView: 1,
  spaceBetween: 10,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    // when window width is >= 530px
    530: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    // when window width is >= 1280px
    1280: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

