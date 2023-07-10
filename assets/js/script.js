// Declare global variables
const choices = document.querySelectorAll(".player-weapon-choice-button");
const playerChoice = document.querySelector("#playerChoice");
const computerChoiceOutput = document.querySelector(".computer-choice-output");
const arenaVictorOutput = document.querySelector("#arenaVictorOutput");
const playerScoreOutput = document.querySelector("#playerScore");
const computerScoreOutput = document.querySelector("#computerScore");

// Refresh button
const refreshGame = document.querySelector("#refreshButton");

//Modal
const modal = document.getElementById("my-modal");
const openModal = document.getElementById("open-modal-button");
const closeModal = document.querySelector(".return-button");

// Computer choices
const weaponOptions = ["rock", "paper", "scissors"];

// Scores
let = playerScore = 0;
let computerScore = 0;
let roundNumber = 0;

// Main game 

// Event listener for player weapon choice
choices.forEach((choice) => choice.addEventListener("click", weaponChoice));

// Generate random computer weapon
function randomComputer() {
    let index = Math.floor(Math.random() * weaponOptions.length);
    return weaponOptions[index];
}

// Function for player weapon choice
function weaponChoice() {
    playerChoice.textContent = choices;
    let playerWeapon = this.id;
    let computerWeapon = randomComputer();
    scoreUpdate(playerWeapon, computerWeapon);
}

// Function to display outcome and update scores
function scoreUpdate(playerWeapon, computerWeapon) {
    if (playerWeapon) {
        computerChoiceOutput.innerHTML = `Computer choice: ${computerWeapon}`;
        if (playerWeapon === computerWeapon) {
            arenaVictorOutput.innerHTML = "Draw!";
        } else if (
            (playerWeapon === "rock" && computerWeapon === "scissors")) {
            arenaVictorOutput.innerHTML = "Player wins!";
            playerScore++;
            playerScoreOutput.innerHTML = `Player score: ${playerScore}`;
        } else if (
            (playerWeapon === "paper" && computerWeapon === "rock")) {
            arenaVictorOutput.innerHTML = "Player wins!";
            playerScore++;
            playerScoreOutput.innerHTML = `Player score: ${playerScore}`;
        } else if (
            (playerWeapon === "scissors" && computerWeapon === "paper")) {
            arenaVictorOutput.innerHTML = "Player wins!";
            playerScore++;
            playerScoreOutput.innerHTML = `Player score: ${playerScore}`;
        } else {
            arenaVictorOutput.innerHTML = "Computer wins!";
            computerScore++;
            computerScoreOutput.innerHTML = `Computer score: ${computerScore}`;
        }

        if (playerScore === 5) {
            arenaVictorOutput.textContent = "Victory! You won the game.";
        }
        if (computerScore === 5) {
            arenaVictorOutput.textContent = "Game over! You lost the game.";
        }
    }
}

// Refresh button function
refreshGame.addEventListener("click", refreshButton);

function refreshButton() {
    playerScore = 0;
    computerSCore = 0;
    roundNumber = 0;
    playerScoreOutput.innerHTML = "Player score: 0";
    computerScoreOutput.innerHTML = "Computer score: 0";
    arenaVictorOutput.innerHTML = "";
}

// Modal for help button

/**  Modal open and hide */
openModal.addEventListener("click", showModal);
closeModal.addEventListener("click", hideModal);

/** Show modal function */
function showModal() {
    modal.style.display = "block";
}

/** Hide modal function */
function hideModal() {
    modal.style.display = "none";
}