function computerPlay() {
    moveOptions = ["rock", "paper", "scissors"]
    return moveOptions[Math.floor(Math.random() * 3)]
}
console.log(computerPlay())