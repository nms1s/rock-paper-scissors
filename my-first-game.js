let computerSelection;
let playerSelection;
let computerPoints = 0;
let playerPoints = 0;

function computerPlay(){
    let computerChoices = ["rock", "paper", "scissors"];
    computerSelection = computerChoices[Math.floor(Math.random()*computerChoices.length)];
}

computerPlay(); // give computerSelection an initial value.


function playRound(){
    if (computerSelection === playerSelection) {
        narratorText.innerText = "That's a Tie.";
        computerPlay();
        checkWinner();
    }
    else if (computerSelection === "rock" && playerSelection === "scissors"){
        narratorText.innerText = "You lost.\nRock beats scissors.\nLets try again.";
        ++computerPoints;
        computerPlay();  
        checkWinner();
    }
    else if (computerSelection === "rock" && playerSelection === "paper"){
        narratorText.innerText = "Easy win!\nPaper beats rock.\nLet's go again!";
        ++playerPoints;
        computerPlay();  
        checkWinner();
    }
    else if (computerSelection === "paper" && playerSelection === "scissors"){
        narratorText.innerText = "Your win!\nScissors beat paper.";
        ++playerPoints;
        computerPlay();  
        checkWinner();
    }
    else if (computerSelection === "paper" && playerSelection === "rock"){
        narratorText.innerText = "Ouch, that's a loss.\n Paper beats rock\nGive it another try.";
        ++computerPoints;
        computerPlay();
        checkWinner();  
    }
    else if (computerSelection === "scissors" && playerSelection === "paper"){
        narratorText.innerText = "You lose...\nScissors beat paper\nLet's go again.";
        ++computerPoints;
        computerPlay();
        checkWinner();  
    }
    else if (computerSelection === "scissors" && playerSelection === "rock"){
        narratorText.innerText = "SMASH! Rock beats scissors.\nWell done!";
        ++playerPoints;
        computerPlay(); 
        checkWinner(); 
    }
    else {
        narratorText.innerText = "Hmmm something went wrong.";
        computerPlay();
        checkWinner();
    }
    
}

function checkWinner(){
    if (playerPoints < 5 && computerPoints < 5){
    }else{
        declareWinner();
        playerPoints = 0;
        computerPoints = 0;
        //startNewGame();
    }  
}

function declareWinner(){
    narratorText.innerText = playerPoints === 5? "Yay! You won the game!!!\nLet's play another one!":"Sorry, it seems that you lost the game...\nLet's play another one!";
}

function startNewGame(){    
}

function updateScore(){
    score.innerText = `SCORE: ${playerPoints} / ${computerPoints}`;
}

// Event listeners

const rockButton = document.querySelector("#rock-btn");
rockButton.addEventListener("click", function(){
    playerSelection = "rock";
    playRound();
    updateScore();
});

const paperButton = document.querySelector("#paper-btn");
paperButton.addEventListener("click", function(){
    playerSelection = "paper";
    playRound();
    updateScore();
});

const scissorsButton = document.querySelector("#scissors-btn");
scissorsButton.addEventListener("click", function(){
    playerSelection = "scissors";
    playRound();
    updateScore();
});

const score = document.querySelector('#score');
updateScore();

const narratorText = document.querySelector(".narrator-text");


// EXECUTE GAME
//checkWinner();