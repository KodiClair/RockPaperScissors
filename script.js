let humanScore = 0;
let computerScore = 0;

let playerChoice = "rock";

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
};

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if(humanChoice == computerChoice) {
        console.log("You Tie!");
    }

    if(humanChoice == "rock") {
        if(computerChoice == "paper") {
            console.log("You lose! " + humanChoice + " loses to " + computerChoice);
            computerScore++;
        }
        if(computerChoice == "scissors") {
            console.log("You win! " + humanChoice + " beats " + computerChoice);
            humanScore++;
        }
    } else if(humanChoice == "paper") {
        if(computerChoice == "scissors") {
            console.log("You lose! " + humanChoice + " loses to " + computerChoice);
            computerScore++;
        }
        if(computerChoice == "rock") {
            console.log("You win! " + humanChoice + " beats " + computerChoice);
            humanScore++;
        }
    } else if(humanChoice == "scissors") {
        if(computerChoice == "rock") {
            console.log("You lose! " + humanChoice + " loses to " + computerChoice);
            computerScore++;
        }
        if(computerChoice == "paper") {
            console.log("You win! " + humanChoice + " beats " + computerChoice);
            humanScore++;
        }
    }
};


function playGame() {
    for (i = 0; i < 5; i++) {
        playRound(getPlayerChoice(), getComputerChoice());
    }

    console.log("Player: " + humanScore + " | Computer: " + computerScore);
    
};

screenEl = document.getElementsByClassName("screen").text;
// element1 = document.getElementById("rock");
// const element2 = document.getElementById('paper');
// const element3 = document.getElementById('scissors');

// element1.addEventListener("click", function() {
//     playerChoice = "rock";
// });
// element2.addEventListener('click', function() {
//     playerChoice = "paper";
// });
// element3.addEventListener('click', function() {
//     playerChoice = "scissors";
// });

console.log(playerChoice);

screenEl = playerChoice;

// playGame();








