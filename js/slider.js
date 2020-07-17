/** @format */

var swiper = new Swiper('.slider', {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: '.pagination',
        type: 'fraction',
        totalClass: 'snaps',
    },
    navigation: {
        nextEl: '.arrow-right',
        prevEl: '.arrow-left',
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 10,
        },
    },
});
