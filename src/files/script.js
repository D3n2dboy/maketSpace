
const menueBurger = document.querySelector('.menue');
const buttonBurger = document.querySelector('.menue__button');
const body = document.querySelector('body');


if (buttonBurger) {
    buttonBurger.addEventListener("click", function (tpalap) {
        if (buttonBurger) {
            buttonBurger.classList.toggle('button__active');
            menueBurger.classList.toggle('menue__active');
            body.classList.toggle('lock');
        }
    });
}