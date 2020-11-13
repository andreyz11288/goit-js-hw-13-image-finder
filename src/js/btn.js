import refs from './refs'
import apiService from './apiService'
import renderCard from './renderCard'

 export default function btnClick () {
  refs.spinner.classList.add('loader')
  apiService.inputValue(refs.inputSearch.value ).then(e => {
      renderCard(e.hits)
      console.log(refs.clientHeight);
    scrollTo(0, (refs.clientHeight + pageYOffset - 60))
  }).finally(() => {
    refs.spinner.classList.remove('loader')
    });
}