import {getRequestFunc} from "./getRequestFunc.js";
const cards = document.querySelector('.cards')
const getValute = getRequestFunc().Valute;


Object.keys(getValute).forEach(function(key) {

    const card = document.createElement('div')
    card.classList.add('card')

    card.innerHTML = `
        <div class="card_name">Название: ${this[key].Name}</div>
        <div class="card_char_code">Аббревиатура: ${this[key].CharCode}</div>
        <div class="card_value">Продажа: ${this[key].Value}</div>
        <div class="card_previous">Покупка: ${this[key].Previous}</div>    
    `

    cards.append(card);
    }, getValute);










