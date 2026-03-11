export const tipSlider = () => {
    new Swiper('.tip__swiper', {
        spaceBetween: '20',
        slidesPerView: 1, // базовое значение для мобильных устройств
        loop: true,
        autoHeight: true,
        mousewheel: {
            forceToAxis: true,
        },
        navigation: {
            prevEl: ".tip__swiper-button--prev",
            nextEl: ".tip__swiper-button--next",
        },
        breakpoints: {
            375: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            }
        }
    })
}