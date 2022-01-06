console.log("Hey! Welcome to our little game!")
console.log("You will be playing Rock, Paper, Scissors with the computer and the first one to reach 5, will be crowned the winner.")
console.log("Good luck!")

let computerSelection;
let playerSelection = prompt("Please type your selection. Rock, paper or scissors: ").toLowerCase().trim();
let computerPoints = 0;
let playerPoints = 0;

function computerPlay(){
    let computerChoices = ["rock", "paper", "scissors"];
    computerSelection = computerChoices[Math.floor(Math.random()*computerChoices.length)];
}

computerPlay();

function playerPlay(){
    playerSelection = prompt("Please type your selection. Rock, paper or scissors: ").toLowerCase().trim();
    switch (playerSelection){  
        case 'rock':
        case 'paper':
        case 'scissors':
            break;
        default:
            console.log("Incorrect selection. Please try again");
    }
}

function playRound(){
    if (computerSelection === playerSelection) {
        console.log("Tie.");
        computerPlay();
        playerPlay();
    }
    else if (computerSelection === "rock" && playerSelection === "scissors"){
        console.log("You lost. Lets try again.")
        ++computerPoints;
        computerPlay();
        playerPlay();  
    }
    else if (computerSelection === "rock" && playerSelection === "paper"){
        console.log("You won. Lets try again")
        ++playerPoints;
        computerPlay();
        playerPlay();  
    }
    else if (computerSelection === "paper" && playerSelection === "scissors"){
        console.log("You won. Lets try again")
        ++playerPoints;
        computerPlay();
        playerPlay();  
    }
    else if (computerSelection === "paper" && playerSelection === "rock"){
        console.log("You lost. Lets try again.")
        ++computerPoints;
        computerPlay();
        playerPlay();  
    }
    else if (computerSelection === "scissors" && playerSelection === "paper"){
        console.log("You lost. Lets try again.")
        ++computerPoints;
        computerPlay();
        playerPlay();  
    }
    else if (computerSelection === "scissors" && playerSelection === "rock"){
        console.log("You won. Lets try again")
        ++playerPoints;
        computerPlay();
        playerPlay();  
    }
    else {
        console.log("Make a proper selection. Rock, Paper, or Scissors")
        computerPlay();
        playerPlay();
    }
    
}

function game(){
    while (playerPoints < 5 && computerPoints < 5){
        playRound();
    }
    declareWinner();
}

function declareWinner(){
    console.log(playerPoints === 5? "Yay! You won the game!":"You lost the game...");
}

game();