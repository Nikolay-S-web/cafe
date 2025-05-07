import './title.scss';

const largeTitles = document.querySelectorAll('.title--size_l');
const middleTitles = document.querySelectorAll('.title--size_m');

function largeTitlePropsSetter(element) {
    const beforeContent = element.childNodes[0].textContent.trim();
    const accentWord = element.querySelector('.title__accent');

    if (!accentWord) return;

    element.style.setProperty('--beroreContent', `'${beforeContent} ${accentWord.textContent}'`);

    const accentWordWidth = accentWord.clientWidth;
    element.style.setProperty('--maskWidth', `${accentWordWidth}px`);
    const titleWidth = element.clientWidth;

    const maskStart = titleWidth * -1;

    element.style.setProperty('--maskStart', `${maskStart}px`);
}

function middleTitlePropsSetter(element) {
    const elementwidth = element.clientWidth;
    const accentWord = element.querySelector('.title__accent');
    if (!accentWord) return;
    const accentWordWidth = accentWord.clientWidth;
    element.style.setProperty('--beforeWidth', `${accentWordWidth}px`);

    const beforeStart = elementwidth * -1;

    element.style.setProperty('--beforeStart', `${beforeStart}px`);
}

function watchTitleWrapper() {
    let timer;
    let delay;
    function watchIn(entries) {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                timer = setTimeout(() => {
                    entry.target.classList.remove('active');
                }, 5000);
            } else {
                timer = clearTimeout(timer);

                if (entry.target.classList.contains('active')) return;

                delay = setTimeout(() => {
                    entry.target.classList.add('active');
                }, 500);
            }
        });
    }

    return watchIn;
}

document.addEventListener('DOMContentLoaded', () => {
    largeTitles.forEach((title) => {
        largeTitlePropsSetter(title);

        const watchTitle = watchTitleWrapper();

        const observer = new IntersectionObserver(watchTitle);

        observer.observe(title);
    });

    middleTitles.forEach((title) => {
        middleTitlePropsSetter(title);

        const watchTitle = watchTitleWrapper();

        const observer = new IntersectionObserver(watchTitle);

        observer.observe(title);
    });
});

window.addEventListener('resize', () => {
    largeTitles.forEach((title) => {
        largeTitlePropsSetter(title);
    });

    middleTitles.forEach((title) => {
        middleTitlePropsSetter(title);
    });
});
