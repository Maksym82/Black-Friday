const swiper = new Swiper(".slider-specialty", {
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
  