import './js/lazy'

import inputSearchValue from './js/input'

import btnClick from './js/btn'

import './css/style.css'
import refs from './js/refs'



refs.inputSearch.addEventListener('input',_.debounce(inputSearchValue, 1000));

refs.btn.addEventListener('click', btnClick)


// Ввод текста в Инпут
// inputSearchValue()


// Рендер разметки и изображений
// renderCard()


// Клик по кнопке
// btnClick()




