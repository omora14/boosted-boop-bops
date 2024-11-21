// Mobile Menu Toggle (please be careful with this)
const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});