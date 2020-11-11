import apiService from './js/apiService'


// console.log(inputSearch);


// import inputValue from './js/fech'
import hend from './handlebars/ulHendel.hbs'
import './css/style.css'
// import hendSearch from '../handlebars/hendel.hbs'
const body = document.querySelector('.gallery');
const formSearch = document.querySelector('#search-form')
const inputSearch = formSearch.querySelector('input')
const btn = document.querySelector('.btn')

// let page = 1;
let search = '';

apiService.resetPage()


inputSearch.addEventListener('input', e)

function e() {
//    search = inputSearch.value
  
    body.innerHTML = ''

    apiService.inputValue(search).then(e => {
        renderCard(e.hits)
       
    });
}



function renderCard(resul) {
  // body.innerHTML = ''
  const markup = hend(resul);
  body.insertAdjacentHTML('beforeend', markup);
}

btn.addEventListener('click', () => {
  apiService.inputValue(search).then(e => {
    renderCard(e.hits)
    
  });
})



