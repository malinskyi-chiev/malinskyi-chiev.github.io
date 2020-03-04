var navMain = document.querySelector('.nav__inner');
var navToggle = document.querySelector('.nav__toggle');

navToggle.addEventListener('click', function () {
    if (navMain.classList.contains('nav__inner--closed')) {
        navMain.classList.remove('nav__inner--closed');
        navMain.classList.add('nav__inner--opened');
    } else {
        navMain.classList.add('nav__inner--closed');
        navMain.classList.remove('nav__inner--opened');
    }
});