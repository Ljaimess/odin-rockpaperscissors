let userScore = 0;
let computerScore = 0;

function getUserChoice() {
    let = userChoice = prompt("Rock, Paper or Scissors?");
    userChoice = userChoice.toLowerCase();
    return userChoice;
};

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    return computerChoice;
};

function playRound(computerChoice, userChoice) {
    // 0 = rock, 1 = paper, 2 = scissor

    if (computerChoice == 0 && userChoice == "paper") {
        console.log("computer chose rock, you win this round");
        userScore++;
    }
    else if (computerChoice == 0 && userChoice == "scissor") {
        console.log("computer chose rock, you lose this round");
        computerScore++;
    }
    else if (computerChoice == 1 && userChoice == "rock") {
        console.log("computer chose paper, you lose this round");
        computerScore++;
    }
    else if (computerChoice == 1 && userChoice == "scissor") {
        console.log("computer chose paper, you win this round");
        userScore++;
    }
    else if (computerChoice == 2 && userChoice == "rock") {
        console.log(" computer chose scissor, you win this round");
        userScore++;
    }
    else if (computerChoice == 2 && userChoice == "paper") {
        console.log(" computer chose scissor, you lose this round");
        computerScore++;
    }
    else {
        console.log("we tied");
    }
};

function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound(getComputerChoice(), getUserChoice());
    };

    if (userScore > computerScore) {
        console.log("YOU WIN THE GAME!!");
    }
    else {
        console.log("YOU LOSE THE GAME");
    }
};

playGame();