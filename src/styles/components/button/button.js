import './button.scss';

const buttons = document.querySelectorAll('.button');

function addActive(element) {
    element.classList.add('active');
}

function removeActive(element) {
    element.classList.remove('active');
}

function checkActive(element) {
    return element.classList.contains('active');
}

function adjustmentValue(value) {
    if (value.includes('s')) {
        value = parseFloat(value) * 1000;
    } else {
        value = parseInt(value);
    }
    return value;
}

const events = ['click', 'mouseover'];

events.forEach((event) => {
    buttons.forEach((button) => {
        button.addEventListener(event, () => {
            if (checkActive(button)) return;
            addActive(button);
            const animationDuration = getComputedStyle(button).getPropertyValue('--animation-duration');
            const delay = adjustmentValue(animationDuration);
            setTimeout(() => {
                removeActive(button);
            }, delay);
        });
    });
});
