const swiper = new Swiper('.swiper1', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        type: 'progressbar'

    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});
let x;
if (screen.width < 500) {
    x = 4;
} else if (screen.width > 500 && screen.width < 1024) {
    x = 7;
} else {
    x = 5;
}
var swiper2 = new Swiper(".swiper2", {
    slidesPerView: x,
    grid: {
        rows: 1
    },
    direction: "horizontal",
    loop: true,
    autoplay: {
        delay: 0.0006,
        disableOnInteraction: false
    },
    speed: 4000,

    spaceBetween: 0
});