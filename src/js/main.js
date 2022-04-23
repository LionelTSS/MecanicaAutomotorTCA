import '../css/main.css';

const moreOptions = document.querySelector('#bmore');
const bShowMobileLinks = document.querySelector('#bmenu');
const mobileMenu = document.querySelector('.links');
const moreMenu = document.querySelector('.more .menu');

bShowMobileLinks.addEventListener('click', (e) => {
    e.preventDefault();
    mobileMenu.classList.toggle('show');
});


