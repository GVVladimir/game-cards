import { getRenderCards, renderLevelGame } from './renderGame.js'

const countElement = document.querySelector('.appGame')
let newGame = ''

const renderComplexity = () => {
    let complexityHTML = ` <div class="count-body">
    <div class="count" id="count">
   
    <header class="count-text">
       Выберите сложность
    </header>
    
    <div class="prod_checbox">  
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

    countElement.innerHTML = complexityHTML

    const complexityElements = document.getElementsByName('radios')
    const startButton = document.querySelector('.count-button')
    startButton.addEventListener('click', () => {
        for (const complexityElement of complexityElements) {
            if (complexityElement.checked) {
                newGame = complexityElement.value
                renderLevelGame()
                getRenderCards()

            }
        }
    })
}

renderComplexity()
