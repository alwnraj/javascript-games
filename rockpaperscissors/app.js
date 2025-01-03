const computerChoice = document.getElementById("computer-choice")
const humanChoice = document.getElementById("human-choice")
const result = document.getElementById("result")
const possibleChoice = document.querySelectorAll("button")
let userChoice
let CompChoice
let resultDisplay

possibleChoice.forEach(possibleChoice => possibleChoice.addEventListener('click',(e) => {
    userChoice = e.target.id
    humanChoice.innerHTML = userChoice
    generateCompChoice()
    getResult()
}))

function generateCompChoice() {
    const randNum = Math.floor(Math.random() * possibleChoice.length + 1)
    //console.log(randNum)

    if (randNum === 1) {
        CompChoice = 'rock'
    }
    if (randNum === 2){
        CompChoice = 'paper'
    }
    if (randNum === 3) {
        CompChoice = 'scissors'
    }
    computerChoice.innerHTML = CompChoice
}

function getResult() {
    if (CompChoice === userChoice){
        resultDisplay = "It's a draw!"
    }
    if (CompChoice === 'rock' && userChoice ==='scissors'){
        resultDisplay = "You lose!"
    }
    if (CompChoice === 'paper' && userChoice==='rock'){
        resultDisplay = "You lose!"
    }
    if (CompChoice === 'scissors' && userChoice==='paper'){
        resultDisplay = "You lose!"
    }
    if (CompChoice === 'paper' && userChoice ==='scissors'){
        resultDisplay = "You win!"
    }
    if (CompChoice === 'scissors' && userChoice==='rock'){
        resultDisplay = "You win!"
    }
    if (CompChoice === 'rock' && userChoice==='paper'){
        resultDisplay = "You win!"
    }
    result.innerHTML = resultDisplay
}