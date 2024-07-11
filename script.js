let humanScore = 0;
let computerScore = 0;
let count = 0;

let playerChoice = "placeholder";

var rock_el = document.getElementById('rock');
var paper_el = document.getElementById('paper');
var scissors_el = document.getElementById('scissors');

rock_el.addEventListener('click', function() {
    playerChoice = "rock";
    logChoice();
});

paper_el.addEventListener('click', function() {
    playerChoice = "paper";
    logChoice();
});

scissors_el.addEventListener('click', function() {
    playerChoice = "scissors";
    logChoice();
});

function logChoice() {
    if(count == 5) {
        document.getElementsByClassName('screen')[0].innerText = "Restarting...";
        count = 0;
        humanScore = 0;
        computerScore = 0;
        return;
    }
    count++;
    playRound(playerChoice, getComputerChoice());
    
};

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
};

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();


    if(humanChoice == computerChoice) {
        document.getElementsByClassName('screen')[0].innerText = "You Tie!";
    }

    if(humanChoice == "rock") {
        if(computerChoice == "paper") {
            document.getElementsByClassName('screen')[0].innerText = "You lose! " + humanChoice + " loses to " + computerChoice;
            computerScore++;
        }
        if(computerChoice == "scissors") {
            document.getElementsByClassName('screen')[0].innerText = "You win! " + humanChoice + " beats " + computerChoice;
            humanScore++;
        }
    } else if(humanChoice == "paper") {
        if(computerChoice == "scissors") {
            document.getElementsByClassName('screen')[0].innerText = "You lose! " + humanChoice + " loses to " + computerChoice;
            computerScore++;
        }
        if(computerChoice == "rock") {
            document.getElementsByClassName('screen')[0].innerText = "You win! " + humanChoice + " beats " + computerChoice;
            humanScore++;
        }
    } else if(humanChoice == "scissors") {
        if(computerChoice == "rock") {
            document.getElementsByClassName('screen')[0].innerText = "You lose! " + humanChoice + " loses to " + computerChoice;
            computerScore++;
        }
        if(computerChoice == "paper") {
            document.getElementsByClassName('screen')[0].innerText = "You win! " + humanChoice + " beats " + computerChoice;
            humanScore++;
        }
    }
    
    if(count == 5) {
        document.getElementsByClassName('screen')[0].innerText = "Player Score: " + humanScore + " | Computer Score: " + computerScore;
    }
};

////////////////////////////////////////////////////////////////////////









