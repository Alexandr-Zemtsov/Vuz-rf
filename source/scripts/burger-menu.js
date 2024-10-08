const buttonBurger = document.querySelector('.header__burger-menu');
const menuBurger = document.querySelector('.header-nav');

const makeBurgerMenu = () => {

  buttonBurger.addEventListener('click', () =>{
    buttonBurger.classList.toggle('header__burger-menu--open');
    menuBurger.classList.toggle('header-nav--open');
  });
};

export { makeBurgerMenu };
