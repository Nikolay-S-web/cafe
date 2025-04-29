import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay, Grid } from 'swiper/modules';

const goodsGalary = new Swiper('.goods-galary', {
    slideFullyVisibleClass: 'goods-galary__item-fully-visible',
    eventsPrefix: 'goods-galary',
    wrapperClass: 'goods-galary__wrapper',
    slideClass: 'goods-galary__item',
    containerModifierClass: 'goods-galary__',
    slideVisibleClass: 'goods-galary__item--visible',
    slideActiveClass: 'goods-galary__item--active',
    modules: [Navigation, Pagination, Autoplay, Grid],
    grid: {
        fill: 'row',
        rows: 2,
    },
    speed: 400,
    spaceBetween: 20,
    slidesPerView: 1,
    watchSlidesProgress: true,
    pagination: {
        el: '.goods-galary__pagination',
        clickable: true,
        bulletClass: 'goods-galary__pagination-bullet',
        bulletActiveClass: 'goods-galary__pagination-bullet-active',
    },
    navigation: {
        enabled: true,
        nextEl: '.goods-galary__button-next',
        prevEl: '.goods-galary__button-prev',
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
