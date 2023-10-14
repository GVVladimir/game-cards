import {
    getRenderCards,
    gameCardsWin,
    gameCardsLost,
    renderLevelGame,
    counterWath,
} from './renderGame'
import '../src/style.css'
const countGameElement = document.querySelector('.app-game') as HTMLElement
// const blockCards = document.querySelector('.app-cards')
// const countBtnElement = document.querySelector('.appGame') as HTMLElement

export let newGame = ''

export const renderComplexity = () => {
    const complexityHTML = ` <div class="count-body">
    <div class="count" id="count">
   
    <header class="count-text">
       Выберите сложность
    </header>
    
    <div class="prod-checbox">  
    <div class="radio-toolbar"> 
        <input type="radio" id="radio1" name="radios" value="radio1" checked>
        <label for="radio1">1</label>
        
        <input type="radio" id="radio2" name="radios" value="radio2">
        <label for="radio2">2</label>
        
        <input type="radio" id="radio3" name="radios" value="radio3">
        <label for="radio3">3</label>
    </div> 
</div>
    <button class="count-button">Старт</button>
    </div>
    
    </div>`

    countGameElement.innerHTML = complexityHTML

    const complexityElements = document.getElementsByName(
        'radios',
    ) as NodeListOf<HTMLInputElement>
    const startButton = document.querySelector('.count-button') as HTMLElement
    startButton.addEventListener('click', () => {
        for (const complexityElement of complexityElements) {
            if (complexityElement.checked) {
                newGame = complexityElement.value
                renderLevelGame()
                getRenderCards()
                setTimeout(() => {
                    getHeadenCard()
                }, 3000)
            }
        }
    })
}

renderComplexity()

function getHeadenCard() {
    const allCards = document.querySelectorAll('.cards')
    const shirtCadrs = document.querySelectorAll(
        '.shirt-cards',
    ) as NodeListOf<Element>

    for (const allCard of allCards) {
        allCard.classList.add('new-cards')
    }
    for (const shirtCard of shirtCadrs) {
        shirtCard.classList.remove('new-cards')
    }
    clickCards()
}

function clickCards() {
    const gameClickCards = document.querySelectorAll('.cards-box')
    let countClick = 0
    let card1: string
    let card2: string

    for (const gameClickCard of gameClickCards) {
        gameClickCard.addEventListener('click', () => {
            const cardsChildren = gameClickCard.children
            cardsChildren[0].classList.remove('new-cards')
            cardsChildren[1].classList.add('new-cards')

            countClick++
            if (countClick % 2 !== 0) {
                card1 = (gameClickCard.children[0] as HTMLImageElement).src
                console.log(card1)
            }
            if (countClick % 2 === 0) {
                card2 = (gameClickCard.children[0] as HTMLImageElement).src
                console.log(card2)

                if (card1 === card2) {
                    setTimeout(() => {
                        clearInterval(counterWath)
                        gameCardsWin()
                    }, 1000)
                } else {
                    setTimeout(() => {
                        clearInterval(counterWath)
                        gameCardsLost()
                    }, 1000)
                }
            }
        })
    }
}
