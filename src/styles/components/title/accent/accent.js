const largeTitles = document.querySelectorAll('.title--size_l');

function getFirstLineText(element) {
    const originalText = element.textContent;
    const lineHeight = parseFloat(getComputedStyle(element).lineHeight);
    const elementHeight = element.clientHeight;

    // Создаем временный элемент для измерения
    const tempElement = document.createElement('div');
    tempElement.classList.add('title');
    tempElement.classList.add('title--size_l');
    tempElement.style.position = 'absolute';
    tempElement.style.width = 'auto';
    tempElement.style.display = 'inline';
    tempElement.style.textWrap = 'nowrap';
    // tempElement.style.visibility = 'hidden';
    // tempElement.style.width = `${element.clientWidth}px`;
    // console.log(element.clientWidth);
    // console.log(tempElement.clientWidth);
    document.body.appendChild(tempElement);

    const beforeContent = element.childNodes[0].textContent.trim();

    const accentWord = element.querySelector('.accent');

    tempElement.textContent = accentWord.textContent + '_';
    const accentWordWidth = tempElement.clientWidth;
    element.style.setProperty('--maskWidth', `${accentWordWidth}px`);

    tempElement.textContent = beforeContent;
    const accentLineWidth = tempElement.clientWidth;

    const maskStop = accentLineWidth;
    element.style.setProperty('--maskStop', `${maskStop}px`);

    element.style.setProperty('--beroreContent', `'${beforeContent} ${accentWord.textContent}'`);

    // document.body.removeChild(tempElement);
}

document.addEventListener('DOMContentLoaded', () => {
    largeTitles.forEach((title) => {
        const firstLine = getFirstLineText(title);
        console.log(firstLine);

        function watchIn(entries, observer) {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    console.log('title out');
                    title.classList.remove('active');
                } else {
                    title.classList.add('active');
                    console.log('title in');
                }
            });
        }

        const observer = new IntersectionObserver(watchIn);

        observer.observe(title);
    });
});
