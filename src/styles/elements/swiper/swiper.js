import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination],
    speed: 400,
    spaceBetween: 20,
    slidesPerView: 1,
    watchSlidesProgress: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true, // возможность клика по пагинации
    },
    navigation: {
        enabled: true,
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    autoplay: {
        delay: 500,
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

// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     direction: 'vertical',
//     loop: true,

//     // If we need pagination
//     pagination: {
//         el: '.swiper-pagination',
//     },

//     // Navigation arrows
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },

//     // And if we need scrollbar
//     scrollbar: {
//         el: '.swiper-scrollbar',
//     },
// });
