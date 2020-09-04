let playerScoreDisplay = document.querySelector("#user-score");
let computerScoreDisplay = document.querySelector("#computer-score");
let userMoveIcon = document.querySelector("#user-move-icon");
let computerMoveIcon = document.querySelector("#computer-move-icon");
// let userMoveText = document.querySelector("#user-move-text");
// let computerMoveText = document.querySelector("#computer-move-text");
let rockBtn = document.querySelector("#rock-btn");
let paperBtn = document.querySelector("#paper-btn");
let scissorsBtn = document.querySelector("#scissors-btn");
let resultDisplay = document.querySelector("#result");
let selectionRow = document.querySelector("#selection-row");
let gameOverRow = document.querySelector("#game-over-row");
let restartBtn = document.querySelector("#restart-btn");

let playerScore = 0;
let computerScore = 0;
const gameLength = 5;
const winningScore = Math.ceil(gameLength / 2);

function computerPlay() {
    moveOptions = ["rock", "paper", "scissors"]
    return moveOptions[Math.floor(Math.random() * 3)]
}

function playRound(computerSelection, playerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == computerSelection) {
        updateDisplay(playerSelection, computerSelection, playerScore, computerScore);
        return "You tied! " + playerSelection + " ties " + computerSelection + "."
    } else if (
        playerSelection == "rock" && computerSelection == "scissors" ||
        playerSelection == "paper" && computerSelection == "rock" ||
        playerSelection == "scissors" && computerSelection == "paper"
    ) {
        playerScore++;
        updateDisplay(playerSelection, computerSelection, playerScore, computerScore);
        return "You win! " + playerSelection + " beats " + computerSelection + "."
    } else if (
        playerSelection == "rock" && computerSelection == "paper" ||
        playerSelection == "paper" && computerSelection == "scissors" ||
        playerSelection == "scissors" && computerSelection == "rock"
    ) {
        computerScore++;
        updateDisplay(playerSelection, computerSelection, playerScore, computerScore);
        return "You lose! " + playerSelection + " loses to " + computerSelection + "."
    } else {
        return 'You must input "rock", "paper", or "Scissors"!'
    }
}

rockBtn.addEventListener('click', () => {
    resultDisplay.textContent = playRound(computerPlay(), "rock");
    checkForWinner(playerScore, computerScore);
});
paperBtn.addEventListener("click", function () {
    resultDisplay.textContent = playRound(computerPlay(), "paper");
    checkForWinner(playerScore, computerScore);
});
scissorsBtn.addEventListener("click", function () {
    resultDisplay.textContent = playRound(computerPlay(), "scissors");
    checkForWinner(playerScore, computerScore);
});
restartBtn.addEventListener('click', () => {
    gameOverRow.classList.toggle('hidden');
    selectionRow.classList.toggle('hidden');
    playerScore = 0;
    computerScore = 0;
    updateDisplay("?", "?", playerScore, computerScore);
    resultDisplay.textContent = "";
});

function updateDisplay(pMove, cMove, pScore, cScore) {
    //   userMoveText.textContent = pMove;
    //   computerMoveText.textContent = cMove;
    playerScoreDisplay.textContent = pScore;
    computerScoreDisplay.textContent = cScore;
    userMoveIcon.innerHTML = "<h1>" + pMove + "</h1>";
    computerMoveIcon.innerHTML = "<h1>" + cMove + "</h1>";
}

function checkForWinner(pScore, cScore) {
    if (Math.max(pScore, cScore) == 5) {
        if (pScore == 5) {
            resultDisplay.innerHTML = resultDisplay.textContent + "</br><h1><strong>" + "Congratulations, you have won!" + "</strong></h1>"
        } else if (cScore == 5) {
            resultDisplay.innerHTML = resultDisplay.textContent + "</br><h1><strong>" + "Sorry, the computer has won." + "</strong></h1>"
        }
        gameOverRow.classList.toggle('hidden');
        selectionRow.classList.toggle('hidden');
    }
}
// game()
