import './about-galary.scss';

import Swiper from 'swiper';
import { Mousewheel, Pagination, Autoplay } from 'swiper/modules';

const swiperGalary = new Swiper('.about-galary', {
    slideFullyVisibleClass: 'about-galary__slide-fully-visible',
    eventsPrefix: 'about-galary',
    wrapperClass: 'about-galary__wrapper',
    slideClass: 'about-galary__slide',
    containerModifierClass: 'about-galary__',
    slideVisibleClass: 'about-galary__slide--visible',
    slideActiveClass: 'about-galary__slide--active',
    slideNextClass: 'about-galary__slide--next',
    slidePrevClass: 'about-galary__slide--prev',
    modules: [Pagination, Autoplay, Mousewheel],
    speed: 400,
    spaceBetween: 20,
    slidesPerView: 1,
    watchSlidesProgress: true,
    pagination: {
        el: '.about-galary__pagination',
        clickable: true,
        bulletClass: 'about-galary__pagination-bullet',
        bulletActiveClass: 'about-galary__pagination-bullet-active',
    },

    autoplay: {
        delay: 10000,
        pauseOnMouseEnter: true,
    },
});

function watchIn(entries, observer) {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            swiperGalary.autoplay.pause();
        } else {
            swiperGalary.autoplay.resume();
        }
    });
}

const observer = new IntersectionObserver(watchIn);

const swiperElement = document.querySelector('.about-galary');

observer.observe(swiperElement);
