import { cards } from './arrCard.js'
import { newGame, renderComplexity } from './main.js'

export let allTimeGame
export let counterWath
export let time

const countGameElement = document.querySelector('.app-game')

// const countBtnElement = document.querySelector('.appGame')
// const allCards = document.getElementsByClassName('.cards')

export let newCards = []
export function getRenderCards() {
    let countCards = 0
    let randomCards = cards.sort(() => Math.random() - 0.5)
    if (newGame === 'radio1') {
        countCards = 3
        newCards.splice(0)
    }
    if (newGame === 'radio2') {
        countCards = 6
        newCards.splice(0)
    }
    if (newGame === 'radio3') {
        countCards = 9
        newCards.splice(0)
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
                <p id="counterWath" class="counter">00.00</p>
        </div>
        <p class="start-over btn-new-game">Начать заново</p>
        
    </div>
    <div class="app-cards"></div>
    `

    countGameElement.innerHTML = levelHtml

    const counterGame = document.getElementById('counterWath')
    time = 0

    counterWath = setInterval(() => {
        let minuts = Math.floor((time / 60) % 60)
        minuts = minuts < 10 ? '0' + minuts : minuts
        let second = Math.floor(time % 60)
        second = second < 10 ? '0' + second : second
        counterGame.textContent = `${minuts}.${second}`
        allTimeGame = `${minuts}.${second}`
        time++
    }, 1000)

    newGameBtn()
}

export function gameCardsWin() {
    const winHTML = `
    <div class="app-result-win">
            <img class="rusult-img" src="static/firework.png" alt="" />
            <h1 class="result-header">Вы выиграли !</h1>
            <p class="time-spent">Затраченное время:</p>
            <p class="time-watch">${allTimeGame}</p>
            <button class="btn-new-game">Играть снова</button>
        </div>`

    countGameElement.innerHTML = winHTML

    newGameBtn()
}

export function gameCardsLost() {
    const lostHTML = `
    <div class="app-result-win">
            <img class="rusult-img" src="static/smail.png" alt="" />
            <h1 class="result-header">Вы проиграли !</h1>
            <p class="time-spent">Затраченное время:</p>
            <p class="time-watch">${allTimeGame}</p>
            <button class="btn-new-game">Играть снова</button>
        </div>`

    countGameElement.innerHTML = lostHTML

    newGameBtn()
}

function newGameBtn() {
    const btnNewGameElements = document.querySelectorAll('.btn-new-game')
    for (const btnNewGameElement of btnNewGameElements)
        btnNewGameElement.addEventListener('click', () => {
            renderComplexity()
        })
}
newGameBtn()
