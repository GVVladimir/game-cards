"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gameCardsLost = exports.gameCardsWin = exports.renderLevelGame = exports.getRenderCards = exports.newCards = exports.time = exports.counterWath = exports.allTimeGame = void 0;
var arrCard_1 = require("./arrCard");
var main_1 = require("./main");
var countGameElement = document.querySelector('.app-game');
// const countBtnElement = document.querySelector('.appGame')
// const allCards = document.getElementsByClassName('.cards')
exports.newCards = [];
function getRenderCards() {
    var countCards = 0;
    var randomCards = arrCard_1.cards.sort(function () { return Math.random() - 0.5; });
    if (main_1.newGame === 'radio1') {
        countCards = 3;
        exports.newCards.splice(0);
    }
    if (main_1.newGame === 'radio2') {
        countCards = 6;
        exports.newCards.splice(0);
    }
    if (main_1.newGame === 'radio3') {
        countCards = 9;
        exports.newCards.splice(0);
    }
    for (var i = 0; i < countCards; i++) {
        exports.newCards.push(randomCards[i]);
    }
    exports.newCards = exports.newCards.concat(exports.newCards);
    exports.newCards.sort(function () { return Math.random() - 0.5; });
    var cardsHtml = exports.newCards
        .map(function (card) {
        return "<div class=\"cards-box\">\n            <img class=\"cards\" src=\"".concat(card.img, "\" alt=\"card\"></img>\n            <img class=\"shirt-cards\" src=\"./static/shirt.png\" alt=\"card\"></img>\n            </div>");
    })
        .join('');
    var blockCards = document.querySelector('.app-cards');
    blockCards.insertAdjacentHTML('afterbegin', cardsHtml);
    // blockCards.innerHTML = cardsHtml
    var shirtCadrs = document.querySelectorAll('.shirt-cards');
    for (var _i = 0, shirtCadrs_1 = shirtCadrs; _i < shirtCadrs_1.length; _i++) {
        var shirtCadr = shirtCadrs_1[_i];
        shirtCadr.classList.add('new-cards');
    }
}
exports.getRenderCards = getRenderCards;
function renderLevelGame() {
    var levelHtml = "\n    <div class=\"level\">\n        <div class=\"time\">\n         <div class=\"report\">\n                <p class=\"min watch\">min</p>\n                <p class=\"sec watch\">sec</p>\n         </div>\n                <p id=\"counterWath\" class=\"counter\">00.00</p>\n        </div>\n        <p class=\"start-over btn-new-game\">\u041D\u0430\u0447\u0430\u0442\u044C \u0437\u0430\u043D\u043E\u0432\u043E</p>\n        \n    </div>\n    <div class=\"app-cards\"></div>\n    ";
    countGameElement.innerHTML = levelHtml;
    var counterGame = document.getElementById('counterWath');
    exports.time = 0;
    exports.counterWath = setInterval(function () {
        var minuts = Math.floor((exports.time / 60) % 60);
        minuts = minuts < 10 ? '0' + minuts : minuts;
        var second = Math.floor(exports.time % 60);
        second = second < 10 ? '0' + second : second;
        counterGame.textContent = "".concat(minuts, ".").concat(second);
        exports.allTimeGame = "".concat(minuts, ".").concat(second);
        exports.time++;
    }, 1000);
    newGameBtn();
}
exports.renderLevelGame = renderLevelGame;
function gameCardsWin() {
    var winHTML = "\n    <div class=\"app-result-win\">\n            <img class=\"rusult-img\" src=\"static/firework.png\" alt=\"\" />\n            <h1 class=\"result-header\">\u0412\u044B \u0432\u044B\u0438\u0433\u0440\u0430\u043B\u0438 !</h1>\n            <p class=\"time-spent\">\u0417\u0430\u0442\u0440\u0430\u0447\u0435\u043D\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F:</p>\n            <p class=\"time-watch\">".concat(exports.allTimeGame, "</p>\n            <button class=\"btn-new-game\">\u0418\u0433\u0440\u0430\u0442\u044C \u0441\u043D\u043E\u0432\u0430</button>\n        </div>");
    countGameElement.innerHTML = winHTML;
    newGameBtn();
}
exports.gameCardsWin = gameCardsWin;
function gameCardsLost() {
    var lostHTML = "\n    <div class=\"app-result-win\">\n            <img class=\"rusult-img\" src=\"static/smail.png\" alt=\"\" />\n            <h1 class=\"result-header\">\u0412\u044B \u043F\u0440\u043E\u0438\u0433\u0440\u0430\u043B\u0438 !</h1>\n            <p class=\"time-spent\">\u0417\u0430\u0442\u0440\u0430\u0447\u0435\u043D\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F:</p>\n            <p class=\"time-watch\">".concat(exports.allTimeGame, "</p>\n            <button class=\"btn-new-game\">\u0418\u0433\u0440\u0430\u0442\u044C \u0441\u043D\u043E\u0432\u0430</button>\n        </div>");
    countGameElement.innerHTML = lostHTML;
    newGameBtn();
}
exports.gameCardsLost = gameCardsLost;
function newGameBtn() {
    var btnNewGameElements = document.querySelectorAll('.btn-new-game');
    for (var _i = 0, btnNewGameElements_1 = btnNewGameElements; _i < btnNewGameElements_1.length; _i++) {
        var btnNewGameElement = btnNewGameElements_1[_i];
        btnNewGameElement.addEventListener('click', function () {
            (0, main_1.renderComplexity)();
        });
    }
}
newGameBtn();
