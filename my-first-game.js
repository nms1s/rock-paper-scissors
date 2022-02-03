let computerSelection;
let playerSelection;
let computerPoints = 0;
let playerPoints = 0;

function computerPlay(){
    let computerChoices = ["rock", "paper", "scissors"];
    computerSelection = computerChoices[Math.floor(Math.random()*computerChoices.length)];
}




function playRound(){
    if (computerSelection === playerSelection) {
        narratorText.innerText = "That's a Tie.";
        tieRoundAudio.play();
        checkWinner();
    }
    else if (computerSelection === "rock" && playerSelection === "scissors"){
        narratorText.innerText = "You lost.\nRock beats scissors.\nLets try again.";
        lostRoundAudio.play();
        ++computerPoints;  
        checkWinner();
    }
    else if (computerSelection === "rock" && playerSelection === "paper"){
        narratorText.innerText = "Easy win!\nPaper beats rock.\nLet's go again!";
        wonRoundAudio.play();
        ++playerPoints;  
        checkWinner();
    }
    else if (computerSelection === "paper" && playerSelection === "scissors"){
        narratorText.innerText = "Your win!\nScissors beat paper.";
        wonRoundAudio.play();
        ++playerPoints;  
        checkWinner();
    }
    else if (computerSelection === "paper" && playerSelection === "rock"){
        narratorText.innerText = "Ouch, that's a loss.\n Paper beats rock\nGive it another try.";
        lostRoundAudio.play();
        ++computerPoints;
        checkWinner();  
    }
    else if (computerSelection === "scissors" && playerSelection === "paper"){
        narratorText.innerText = "You lose...\nScissors beat paper\nLet's go again.";
        lostRoundAudio.play();
        ++computerPoints;
        checkWinner();  
    }
    else if (computerSelection === "scissors" && playerSelection === "rock"){
        narratorText.innerText = "SMASH! Rock beats scissors.\nWell done!";
        wonRoundAudio.play();
        ++playerPoints; 
        checkWinner(); 
    }
    else {
        narratorText.innerText = "Hmmm something went wrong.";
        checkWinner();
    }
    
}

function checkWinner(){
    if (playerPoints < 5 && computerPoints < 5){
    }else{
        declareWinner();
        playerPoints = 0;
        computerPoints = 0;
    }  
}

function declareWinner(){
    if (playerPoints===5){
        narratorText.innerText = "Yay! You won the game!!!\nLet's play another one!";
        wonGameAudio.play();
    } else if (computerPoints===5){
        narratorText.innerText = "Sorry, it seems that you lost the game...\nLet's play another one!";
        lostGameAudio.play();
    }
}


function updateScore(){
    score.innerText = `SCORE: ${playerPoints} / ${computerPoints}`;
}

// Event listeners

const rockButton = document.querySelector("#rock-btn");
rockButton.addEventListener("click", function(){
    computerPlay();
    playerSelection = "rock";
    playRound();
    updateScore();
});

const paperButton = document.querySelector("#paper-btn");
paperButton.addEventListener("click", function(){
    computerPlay();
    playerSelection = "paper";
    playRound();
    updateScore();
});

const scissorsButton = document.querySelector("#scissors-btn");
scissorsButton.addEventListener("click", function(){
    computerPlay();
    playerSelection = "scissors";
    playRound();
    updateScore();
});

const score = document.querySelector('#score');
updateScore();

const narratorText = document.querySelector(".narrator-text");


// ANIMATION

const images = document.querySelectorAll(".fist-img");
const leftFist = images.item(0);
const rightFist = images.item(1);

rockButton.addEventListener("click", function(){
   revealLeft();
   revealRight();
})

paperButton.addEventListener("click", function(){
    revealLeft();
    revealRight();
 })

 scissorsButton.addEventListener("click", function(){
    revealLeft();
    revealRight();
 })


function revealLeft(){
    if (playerSelection === "rock"){
        leftFist.src = "images/rock.png";
    } else if (playerSelection === "paper"){
        leftFist.src = "images/paper.png";
    } else if (playerSelection === "scissors"){
        leftFist.src = "images/scissors.png";
    } else {
        console.log("ERROR")
    }
}

function revealRight(){
    if (computerSelection === "rock"){
        rightFist.src = "images/rock-inv.png";
    } else if (computerSelection === "paper"){
        rightFist.src = "images/paper-inv.png";
    } else if (computerSelection === "scissors"){
        rightFist.src = "images/scissors-inv.png";
    } else {
        console.log("ERROR")
    }
}

// AUDIO

const wonGameAudio = document.querySelector("#won-game");
const lostGameAudio = document.querySelector("#lost-game");
const wonRoundAudio = document.querySelector("#won-round");
const lostRoundAudio = document.querySelector("#lost-round");
const tieRoundAudio = document.querySelector("#tie-round");
