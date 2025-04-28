import Swiper from 'swiper';
import { Mousewheel, Autoplay } from 'swiper/modules';

const deliverySwiper = new Swiper('.delivery_info-procedure', {
    slideFullyVisibleClass: 'delivery_info-procedure__slide-fully-visible',
    eventsPrefix: 'delivery_info-procedure',
    wrapperClass: 'delivery_info-procedure__wrapper',
    slideClass: 'delivery_info-procedure__slide',
    containerModifierClass: 'delivery_info-procedure__',
    slideVisibleClass: 'delivery_info-procedure__slide--visible',
    slideActiveClass: 'delivery_info-procedure__slide--active',
    modules: [Autoplay, Mousewheel],
    speed: 400,
    // spaceBetween: 20,
    slidesPerView: 1,
    watchSlidesProgress: true,

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
        1024: {
            slidesPerView: 3, // Для десктопов
        },
        //     1200: {
        //         slidesPerView: 3, // Для больших экранов
        //     },
    },
    mousewheel: true,
});

function watchIn(entries, observer) {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            console.log('no');
            // swiperGalary.pause();
            deliverySwiper.autoplay.pause();
        } else {
            deliverySwiper.autoplay.resume();
        }
    });
}

const observer = new IntersectionObserver(watchIn);

const swiperElement = document.querySelector('.about-galary');

observer.observe(swiperElement);
