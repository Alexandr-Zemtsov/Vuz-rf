const bodyElem = document.querySelector('body');


document.querySelectorAll('.filter-group').forEach((dropdownWrapper) => {
  const selectButton = dropdownWrapper.querySelector('.filter-group__input--select');
  const dropDowninput = dropdownWrapper.querySelector('.filter-group__dropdown-hidden');
  const selectList = dropdownWrapper.querySelector('.filter-group__list-dropdown');
  const selectItem = dropdownWrapper.querySelectorAll('.select-list__item');

  selectButton.onclick = function() {
    selectList.classList.toggle('filter-group__list-dropdown--open');
    this.classList.toggle('filter-group__input--active');
  };

  selectItem.forEach((element) => {
    const text = element.textContent;

    element.addEventListener('click', (evt) => {
      evt.stopPropagation();
      selectButton.textContent = text;
      dropDowninput.value = text;
      selectList.classList.remove('filter-group__list-dropdown--open');
      selectButton.classList.remove('filter-group__input--active');
    });
  });

  bodyElem.addEventListener('click', (evt) => {
    if (evt.target !== selectButton) {
      selectList.classList.remove('filter-group__list-dropdown--open');
      selectButton.classList.remove('filter-group__input--active');
    }
  });

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Tab' || evt.key === 'Escape') {
      selectList.classList.remove('filter-group__list-dropdown--open');
      selectButton.classList.remove('filter-group__input--active');
    }
  });

});


