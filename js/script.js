import calc from './modules/calc'
import cards from './modules/cards'
import modal from './modules/modal'
import slider from './modules/slider'
import tabs from './modules/tabs'
import timer from './modules/timer'
import forms from './modules/forms'

document.addEventListener('DOMContentLoaded', () =>{
    forms('form', '.modal')
    cards()
    modal('[data-btn]', '.modal')
    slider()
    tabs('.tabcontent', '.tabheader__items .tabheader__item', 'tabheader__item_active')
    timer('.timer', '2022-01-01')
    calc()
})



    // fetch('http://localhost:3000/menu')
    // .then(data => (data.json()))
    
    
