import './link.scss';
import './notice/notice';
import showNotice from './notice/notice';

const links = document.querySelectorAll('.link');

links.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();

        const target = link.getAttribute('href');
        if (target == '') {
            if (!link.innerText) {
                const label = link.getAttribute('aria-label');
                showNotice(label);
                return;
            }
            showNotice(link.innerText);
            return;
        }

        if (!target.includes('#')) return;

        const targetElement = document.querySelector(target);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const pageId = document.body.id;

    links.forEach((link) => {
        const target = link.getAttribute('href');
        if (target === '' || target.includes('#')) {
            return;
        }

        if (target.includes(pageId)) {
            link.classList.add('link--current');
            const targetElement = document.querySelector(`#${pageId}`);
            link.addEventListener('click', () => {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            });
        }
    });
});
