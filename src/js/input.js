import refs from './refs'
import apiService from './apiService'
import renderCard from './renderCard'

export default function inputSearchValue() {
  refs.spinner.classList.add('loader')
    refs.body.innerHTML = ''
    apiService.inputValue(refs.inputSearch.value ).then(e => {
        renderCard(e.hits)
      refs.btn.classList.remove('none')
    })
      .finally(() => {
      refs.spinner.classList.remove('loader')
    });
}