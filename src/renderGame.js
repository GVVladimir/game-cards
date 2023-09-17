import { cards } from './arrCard.js'


const blockCards = document.querySelector('.app-cards')

export function getRenderCards() {
    const cardsHtml = cards.map((card) => {
            return '<img src="${card.img}" alt="card"></img>'
        })
        .join('')
    
    // blockCards.insertAdjacentHTML('afterbegin', cardsHTML)
    blockCards.innerHTML = cardsHtml;
}
const countElement = document.querySelector('.appGame')
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
        
    </div>`

    countElement.innerHTML = levelHtml
}
