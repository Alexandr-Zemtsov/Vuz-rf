const upButton = document.querySelector('.up-button');

window.addEventListener('scroll', () => {
  if(window.scrollY > 150) {
    upButton.classList.add('up-button--shown');
  } else {
    upButton.classList.remove('up-button--shown');
  }
});

upButton.addEventListener('click', () => {
  window.scrollTo(0, 0);
});
