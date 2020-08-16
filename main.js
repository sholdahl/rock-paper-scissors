let playerScore = 0;
let computerScore = 0;
const gameLength = 5;
const winningScore = Math.ceil(gameLength / 2)

function computerPlay() {
    moveOptions = ["rock", "paper", "scissors"]
    return moveOptions[Math.floor(Math.random() * 3)]
}

function playRound(computerSelection, playerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == computerSelection) {
        return "You tied! " + playerSelection + " ties " + computerSelection + "."
    } else if (
        playerSelection == "rock" && computerSelection == "scissors" ||
        playerSelection == "paper" && computerSelection == "rock" ||
        playerSelection == "scissors" && computerSelection == "paper"
    ) {
        playerScore++;
        return "You win! " + playerSelection + " beats " + computerSelection + "."
    } else if (
        playerSelection == "rock" && computerSelection == "paper" ||
        playerSelection == "paper" && computerSelection == "scissors" ||
        playerSelection == "scissors" && computerSelection == "rock"
    ) {
        computerScore++;
        return "You lose! " + playerSelection + " loses to " + computerSelection + "."
    } else {
        return 'You must input "rock", "paper", or "Scissors"!'
    }
}

// const computerSelection = computerPlay();
// const playerSelection = "ROCK";
// console.log(playRound(computerSelection, playerSelection))

function game() {
    i=0
    for (leaderScore = 0; winningScore > leaderScore; i ++) {
        let playerSelection = window.prompt("Lets play rock, paper, scissors, enter your selection!", "type in 'rock', 'paper', or 'scissors");
        let computerSelection = computerPlay();
        console.log(playRound(computerSelection, playerSelection));
        if (winningScore == playerScore) {
            console.log("After " + (i + 1) + " rounds, you have beaten the computer " + playerScore + " to " + computerScore + "!")
        } else if (winningScore == computerScore) {
            console.log("After " + (i + 1) + " rounds, you have lost to the computer " + playerScore + " to " + computerScore + "!")
        } else {
            console.log("The current score is player: " + playerScore + " computer: "+ computerScore + ".")
        }
        leaderScore = Math.max(playerScore, computerScore);
        setTimeout(3000)
    }
}

game()
