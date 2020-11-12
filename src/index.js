import './js/lazy'
import apiService from './js/apiService'
import hend from './handlebars/ulHendel.hbs'
import './css/style.css'


const body = document.querySelector('.gallery');
const formSearch = document.querySelector('#search-form')
const inputSearch = formSearch.querySelector('input')
const btn = document.querySelector('.btn')
const spinner = document.querySelector('#loader')

let clientHeight = document.documentElement.clientHeight

  

console.log(clientHeight);
// scrollTo(0, clientHeight)


inputSearch.addEventListener('input',_.debounce(inputSearchValue, 1000));

function inputSearchValue() {

  spinner.classList.add('loader')
    console.log(inputSearch.value); 
    body.innerHTML = ''
    apiService.inputValue(inputSearch.value ).then(e => {
        renderCard(e.hits)
      btn.classList.remove('none')
    }).finally(() => {
      spinner.classList.remove('loader')
    });
}



function renderCard(resul) {
  const markup = hend(resul);
  body.insertAdjacentHTML('beforeend', markup);
}

btn.addEventListener('click', () => {
           

  spinner.classList.add('loader')
  apiService.inputValue(inputSearch.value ).then(e => {
    renderCard(e.hits)
    scrollTo(0, (clientHeight + pageYOffset))
  }).finally(() => {
    spinner.classList.remove('loader')
    });
})


