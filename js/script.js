// "use strict";

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
const swiper = new Swiper('.slider-advantages', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  grabCursor: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

});