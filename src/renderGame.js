import { cards } from './arrCard.js'
import { newGame } from './main.js'

const countGameElement = document.querySelector('.app-game')

// const countBtnElement = document.querySelector('.appGame')
// const allCards = document.getElementsByClassName('.cards')

export let newCards = []
export function getRenderCards() {
    let countCards = 0
    let randomCards = cards.sort(() => Math.random() - 0.5)
    if (newGame === 'radio1') {
        countCards = 3
    }
    if (newGame === 'radio2') {
        countCards = 6
    }
    if (newGame === 'radio3') {
        countCards = 9
    }

    for (let i = 0; i < countCards; i++) {
        newCards.push(randomCards[i])
    }

    newCards = newCards.concat(newCards)
    newCards.sort(() => Math.random - 0.5)

    const cardsHtml = newCards
        .map((card) => {
            return `<div class="cards-box">
            <img class="cards" src="${card.img}" alt="card"></img>
            <img class="shirt-cards" src="./static/shirt.png" alt="card"></img>
            </div>
            `
        })
        .join('')

    const blockCards = document.querySelector('.app-cards')
    blockCards.insertAdjacentHTML('afterBegin', cardsHtml)
    // blockCards.innerHTML = cardsHtml
    const shirtCadrs = document.querySelectorAll('.shirt-cards')
    for (const shirtCadr of shirtCadrs) {
        shirtCadr.classList.add('new-cards')
    }
}

export function renderLevelGame() {
    const levelHtml = `
    <div class="level">
        <div class="time">
         <div class="report">
                <p class="min watch">min</p>
                <p class="sec watch">sec</p>
         </div>
                <p class="counter">00:00</p>
        </div>
        <p class="start-over">Начать заново</p>
        
    </div>
    <div class="app-cards"></div>
    `

    countGameElement.innerHTML = levelHtml
}
