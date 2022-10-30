let player = {
    name: "Player 1",
    chips: 150
}

let firstCard = getRandomCard() ;
let secondCard = getRandomCard();
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let isAlive = true;
let hasBlackJack = false;

let message = "" 
let messageEl = document.getElementById("message");
let cardsEl = document.querySelector("#cards");
let sumEl = document.querySelector("#sum");
let playerEl = document.getElementById("player");

playerEl.textContent = player.name + " : $" + player.chips;


function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    }
    else if (randomNumber === 1) {
        return 11
    }
    else {
    return randomNumber
    }
};

function startGame() {
    renderGame()  
};

function renderGame(){
    cardsEl.textContent = "Cards: " 
    for ( let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum 
    if (sum <= 20) {
        isAlive = true
        message = "Do you want to draw another card?"
    } else if (sum === 21) {
        message = "You've got a blackJack!" 
        hasBlackJack = true
    } else {
        message = "You are out of the game" 
        isAlive = false
    }
    messageEl.textContent = message 
};

function newCard() { 

    if (hasBlackJack === false && isAlive === true) {
    let card = getRandomCard() 
    sum += card
    cards.push(card) 
    renderGame()
    }
};
