const burger = document.querySelector('.burger');
const parent = burger.parentElement;
const navigation = parent.querySelector('.navigation');

function burgerCloseHandler() {
    navigation.classList.remove('active');
    burger.classList.remove('active');
}
function burgerToggleHandler() {
    navigation.classList.toggle('active');
    burger.classList.toggle('active');
}

burger.addEventListener('click', burgerToggleHandler);

function handleClickOutside(event) {
    if (!parent.contains(event.target)) {
        console.log('Клик мимо элемента!');
        burgerCloseHandler();
    }
}

document.addEventListener('click', handleClickOutside);

document.addEventListener('scroll', burgerCloseHandler);
