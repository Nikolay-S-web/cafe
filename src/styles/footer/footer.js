const footerLinks = document.querySelectorAll('.footer-follow__link');

footerLinks.forEach((link) => {
    link.addEventListener('click', (event) => event.preventDefault());
});
