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
