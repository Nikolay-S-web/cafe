import Swiper from 'swiper';

import './popular-goods.scss';

import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const popularGoods = new Swiper('.popular-goods', {
    slideFullyVisibleClass: 'popular-goods__slide-fully-visible',
    eventsPrefix: 'popular-goods',
    wrapperClass: 'popular-goods__wrapper',
    slideClass: 'popular-goods__slide',
    containerModifierClass: 'popular-goods__',
    slideVisibleClass: 'popular-goods__slide--visible',
    slideActiveClass: 'popular-goods__slide--active',
    modules: [Navigation, Pagination, Autoplay],
    speed: 400,
    spaceBetween: 20,
    slidesPerView: 1,
    watchSlidesProgress: true,
    pagination: {
        el: '.popular-goods__pagination',
        clickable: true,
        bulletClass: 'popular-goods__pagination-bullet',
        bulletActiveClass: 'popular-goods__pagination-bullet-active',
    },
    navigation: {
        enabled: true,
        nextEl: '.popular-goods__button-next',
        prevEl: '.popular-goods__button-prev',
    },
    autoplay: {
        delay: 5000,
        pauseOnMouseEnter: true,
    },

    breakpoints: {
        // 425: {
        //     slidesPerView: 1, // Для мобильных устройств
        // },
        600: {
            slidesPerView: 2, // Для планшетов
        },
        // 1024: {
        //     slidesPerView: 2, // Для десктопов
        // },
        1200: {
            slidesPerView: 3, // Для больших экранов
        },
    },
    mousewheel: {},
});

// const swiperGalary = new Swiper('.about-galary', {
//     modules: [Navigation, Pagination],
//     speed: 400,
//     spaceBetween: 20,
//     slidesPerView: 1,
//     watchSlidesProgress: true,
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true, // возможность клика по пагинации
//     },
//     navigation: {
//         enabled: true,
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },

//     autoplay: {
//         delay: 500,
//     },
//     // breakpoints: {
//     //     // 425: {
//     //     //     slidesPerView: 1, // Для мобильных устройств
//     //     // },
//     //     600: {
//     //         slidesPerView: 2, // Для планшетов
//     //     },
//     //     // 1024: {
//     //     //     slidesPerView: 2, // Для десктопов
//     //     // },
//     //     1200: {
//     //         slidesPerView: 3, // Для больших экранов
//     //     },
//     // },
//     mousewheel: {},
// });
