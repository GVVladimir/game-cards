"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderComplexity = exports.newGame = void 0;
var renderGame_1 = require("./renderGame");
require("../src/style.css");
var countGameElement = document.querySelector('.app-game');
// const blockCards = document.querySelector('.app-cards')
var countBtnElement = document.querySelector('.appGame');
exports.newGame = '';
var renderComplexity = function () {
    var complexityHTML = " <div class=\"count-body\">\n    <div class=\"count\" id=\"count\">\n   \n    <header class=\"count-text\">\n       \u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u043B\u043E\u0436\u043D\u043E\u0441\u0442\u044C\n    </header>\n    \n    <div class=\"prod-checbox\">  \n    <div class=\"radio-toolbar\"> \n        <input type=\"radio\" id=\"radio1\" name=\"radios\" value=\"radio1\" checked>\n        <label for=\"radio1\">1</label>\n        \n        <input type=\"radio\" id=\"radio2\" name=\"radios\" value=\"radio2\">\n        <label for=\"radio2\">2</label>\n        \n        <input type=\"radio\" id=\"radio3\" name=\"radios\" value=\"radio3\">\n        <label for=\"radio3\">3</label>\n    </div> \n</div>\n    <button class=\"count-button\">\u0421\u0442\u0430\u0440\u0442</button>\n    </div>\n    \n    </div>";
    countGameElement.innerHTML = complexityHTML;
    var complexityElements = document.getElementsByName('radios');
    var startButton = document.querySelector('.count-button');
    startButton.addEventListener('click', function () {
        for (var _i = 0, complexityElements_1 = complexityElements; _i < complexityElements_1.length; _i++) {
            var complexityElement = complexityElements_1[_i];
            if (complexityElement.checked) {
                exports.newGame = complexityElement.value;
                (0, renderGame_1.renderLevelGame)();
                (0, renderGame_1.getRenderCards)();
                setTimeout(function () {
                    getHeadenCard();
                }, 3000);
            }
        }
    });
};
exports.renderComplexity = renderComplexity;
(0, exports.renderComplexity)();
function getHeadenCard() {
    var allCards = document.querySelectorAll('.cards');
    var shirtCadrs = document.querySelectorAll('.shirt-cards');
    for (var _i = 0, allCards_1 = allCards; _i < allCards_1.length; _i++) {
        var allCard = allCards_1[_i];
        allCard.classList.add('new-cards');
    }
    for (var _a = 0, shirtCadrs_1 = shirtCadrs; _a < shirtCadrs_1.length; _a++) {
        var shirtCard = shirtCadrs_1[_a];
        shirtCard.classList.remove('new-cards');
    }
    clickCards();
}
function clickCards() {
    var gameClickCards = document.querySelectorAll('.cards-box');
    var countClick = 0;
    var card1;
    var card2;
    var _loop_1 = function (gameClickCard) {
        gameClickCard.addEventListener('click', function () {
            var cardsChildren = gameClickCard.children;
            cardsChildren[0].classList.remove('new-cards');
            cardsChildren[1].classList.add('new-cards');
            countClick++;
            if (countClick % 2 !== 0) {
                card1 = gameClickCard.children[0].src;
                console.log(card1);
            }
            if (countClick % 2 === 0) {
                card2 = gameClickCard.children[0].src;
                console.log(card2);
                if (card1 === card2) {
                    setTimeout(function () {
                        clearInterval(renderGame_1.counterWath);
                        (0, renderGame_1.gameCardsWin)();
                    }, 1000);
                }
                else {
                    setTimeout(function () {
                        clearInterval(renderGame_1.counterWath);
                        (0, renderGame_1.gameCardsLost)();
                    }, 1000);
                }
            }
        });
    };
    for (var _i = 0, _a = gameClickCards; _i < _a.length; _i++) {
        var gameClickCard = _a[_i];
        _loop_1(gameClickCard);
    }
}
