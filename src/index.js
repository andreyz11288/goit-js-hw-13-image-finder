import apiService from './js/apiService'
import hend from './handlebars/ulHendel.hbs'
import './css/style.css'


const body = document.querySelector('.gallery');
const formSearch = document.querySelector('#search-form')
const inputSearch = formSearch.querySelector('input')
const btn = document.querySelector('.btn')

let clientHeight = document.documentElement.clientHeight

  

console.log(clientHeight);
// scrollTo(0, clientHeight)


inputSearch.addEventListener('input', e)

function e() {

    console.log(inputSearch.value); 
    body.innerHTML = ''
    apiService.inputValue(inputSearch.value ).then(e => {
        renderCard(e.hits)
       
    });
}



function renderCard(resul) {
  const markup = hend(resul);
  body.insertAdjacentHTML('beforeend', markup);
}

btn.addEventListener('click', () => {
  apiService.inputValue(inputSearch.value ).then(e => {
    renderCard(e.hits)
    scrollTo(0, (clientHeight + pageYOffset))
   

  });
})


