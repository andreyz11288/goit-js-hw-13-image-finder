import './js/lazy'

import inputSearchValue from './js/input'

import btnClick from './js/btn'
import * as basicLightbox from 'basiclightbox'
import './css/style.css'
import './css/main.css'
import refs from './js/refs'



refs.inputSearch.addEventListener('input',_.debounce(inputSearchValue, 1000));

refs.btn.addEventListener('click', btnClick)


// Ввод текста в Инпут
// inputSearchValue()


// Рендер разметки и изображений
// renderCard()


// Клик по кнопке
// btnClick()

const form = document.querySelector('.form')
form.addEventListener('click', (event) => {
  // event.defaultPrevented();
  const dataSrc = event.target.dataset.src;
  const instance = basicLightbox.create(`
      <img src="${dataSrc}" width="1200" height="800">
  `).show()
})


