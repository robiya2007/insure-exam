const hamburgerButton = document.querySelector('.hamburger');
const hamburgerNav = document.querySelector('.header__nav');
const body = document.querySelector('body');

hamburgerButton.addEventListener('click',function() {
  hamburgerButton.classList.toggle('hamburger--close');
  hamburgerNav.classList.toggle('header__nav--opened');
  body.classList.toggle('body--hidden');
})  