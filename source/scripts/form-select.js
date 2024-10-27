document.querySelectorAll('.filter-select__dropdown').forEach((dropdown) => {
  const selectButton = dropdown.querySelector('.filter-select__button');
  const selectList = dropdown.querySelector('.filter-select__list');
  const selectItemList = selectList.querySelectorAll('.filter-select__item');
  const selectInput = dropdown.querySelector('.filter-select__input');

  selectButton.addEventListener('click', () => {
    selectList.classList.toggle('filter-select__list--visible');
    selectButton.classList.toggle('filter-select__button--active');
  });

  selectItemList.forEach((listItem) => {
    listItem.addEventListener('click', (evt) => {
      evt.stopPropagation();
      selectButton.textContent = listItem.textContent;
      selectButton.focus();
      selectInput.value = listItem.dataset.value;
      selectList.classList.remove('filter-select__list--visible');
    });
  });

  document.addEventListener('click',(evt) => {

    if (evt.target !== selectButton) {
      selectButton.classList.remove('filter-select__button--active');
      selectList.classList.remove('filter-select__list--visible');
    }
  });


  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Tab' || evt.key === 'Escape') {
      selectButton.classList.remove('filter-select__button--active');
      selectList.classList.remove('filter-select__list--visible');
    }
  });
});
