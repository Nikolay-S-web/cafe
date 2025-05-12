import './link.scss';
import './notice/notice';
import showNotice from './notice/notice';

const links = document.querySelectorAll('.link');
// const currentPageUrl = window.location.href;

links.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();

        const targetId = link.getAttribute('href');
        if (targetId == '') {
            showNotice(link.textContent);
            return;
        }
        if (!targetId.includes('#')) return;

        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    });
});
