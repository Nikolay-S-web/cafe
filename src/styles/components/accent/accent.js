const accentTitle = document.querySelector('.title');

function getFirstLineText(element) {
    const originalText = element.textContent;
    const lineHeight = parseFloat(getComputedStyle(element).lineHeight);
    const elementHeight = element.clientHeight;

    // Создаем временный элемент для измерения
    const tempElement = document.createElement('div');
    tempElement.classList.add('title');
    tempElement.classList.add('title--size_l');
    tempElement.style.position = 'absolute';
    // tempElement.style.visibility = 'hidden';
    tempElement.style.width = `${element.clientWidth}px`;
    console.log(element.clientWidth);
    console.log(tempElement.clientWidth);
    document.body.appendChild(tempElement);

    let text = '';
    for (let i = 0; i < originalText.length; i++) {
        console.log(text);
        text += originalText[i];
        tempElement.textContent = text;
        if (tempElement.clientHeight > lineHeight) {
            text = text.split(' ');
            text.pop();

            const accentWord = text[text.length - 1];

            tempElement.style.width = 'auto';
            tempElement.style.display = 'inline';

            tempElement.textContent = accentWord + ' ';
            const accentWordWidth = tempElement.clientWidth;
            element.style.setProperty('--maskWidth', `${accentWordWidth}px`);

            text = text.join(' ');
            tempElement.textContent = text;
            const totalLineWidth = tempElement.clientWidth;

            const maskStop = totalLineWidth - accentWordWidth;
            element.style.setProperty('--maskStop', `${maskStop}px`);

            element.style.setProperty('--beroreContent', `'${text}'`);

            break;
        }
    }

    // document.body.removeChild(tempElement);
    return text.trim(); // Возвращаем первую линию текста
}

document.addEventListener('DOMContentLoaded', () => {
    const firstLine = getFirstLineText(accentTitle);
    console.log(firstLine);
});

function watchIn(entries, observer) {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            console.log('title out');
            accentTitle.classList.remove('active');
        } else {
            accentTitle.classList.add('active');
            console.log('title in');
        }
    });
}

const observer = new IntersectionObserver(watchIn);

observer.observe(accentTitle);
