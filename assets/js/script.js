// Declare global variables
const choices = document.getElementsByClassName("player-weapon-choice-button");
const playerChoice = document.getElementById("playerChoice");
const computerChoice = document.getElementById("computerChoice");
const computerChoiceOutput = document.getElementsByClassName("computer-choice-output");
const arenaVictorOutput = document.getElementById("arenaVictorOutput");
const playerScoreOutput = document.getElementById("playerScore");
const computerScoreOutput = document.getElementById("computerScore");
const roundOutput = document.getElementById("roundNumber");

// Refresh button
const refreshGame = document.getElementById("refreshButton");

//Modal
const modal = document.getElementById("my-modal");
const openModal = document.getElementById("open-modal-button");
const closeModal = document.querySelector("#return-button");

// Computer choices
const weaponOptions = ["rock", "paper", "scissors"];

// Scores
let playerScore = 0;
let computerScore = 0;
let roundNumber = 0;

// Main game 

// Event listener for player weapon choice
for (let choice of choices) {
    choice.addEventListener("click", weaponChoice);
};

// Generate random computer weapon
function randomComputer() {
    let index = Math.floor(Math.random() * weaponOptions.length);
    return weaponOptions[index];
}

// Function for player weapon choice
function weaponChoice(event) {
    let clickedCharacterButton = event.currentTarget;
    let playerWeapon = clickedCharacterButton.id;
    let computerWeapon = randomComputer();
    scoreUpdate(playerWeapon, computerWeapon);
}

// Function to display outcome and update scores
function scoreUpdate(playerWeapon, computerWeapon) {
    if (playerWeapon) {
        computerChoice.innerHTML = `Computer choice: ${computerWeapon}`;
        playerChoice.innerHTML = `Player choice: ${playerWeapon}`;
        if (playerWeapon === computerWeapon) {
            arenaVictorOutput.innerHTML = "Draw!";
            roundNumber += 1;
            roundOutput.innerHTML = `Round number: ${roundNumber}`;
        } else if
            (playerWeapon === "rock" && computerWeapon === "scissors") {
            arenaVictorOutput.innerHTML = "Player wins!";
            playerScore += 1;
            roundNumber += 1;
            playerScoreOutput.innerHTML = `Player score: ${playerScore}`;
            roundOutput.innerHTML = `Round number: ${roundNumber}`;
        } else if
            (playerWeapon === "paper" && computerWeapon === "rock") {
            arenaVictorOutput.innerHTML = "Player wins!";
            playerScore += 1;
            roundNumber += 1;
            playerScoreOutput.innerHTML = `Player score: ${playerScore}`;
            roundOutput.innerHTML = `Round number: ${roundNumber}`;;
        } else if
            (playerWeapon === "scissors" && computerWeapon === "paper") {
            arenaVictorOutput.innerHTML = "Player wins!";
            playerScore += 1;
            roundNumber += 1;
            playerScoreOutput.innerHTML = `Player score: ${playerScore}`;
            roundOutput.innerHTML = `Round number: ${roundNumber}`;
        } else {
            arenaVictorOutput.innerHTML = "Computer wins!";
            computerScore += 1;
            roundNumber += 1;
            computerScoreOutput.innerHTML = `Computer score: ${computerScore}`;
            roundOutput.innerHTML = `Round number: ${roundNumber}`;
        }

        if (playerScore == 6) {
            arenaVictorOutput.textContent = "Victory! You won the game.";
            endGame();
        }
        if (computerScore == 6) {
            arenaVictorOutput.textContent = "Game over! You lost the game.";
            endGame();
        }
    }
}

// Function for end of game once score of 6 is reached
function endGame() {
    for (let choice of choices) {
        choice.removeEventListener("click", weaponChoice);
    }
}

// Refresh button function
refreshGame.addEventListener("click", refreshButton);

function refreshWeaponChoiceListener() {
    for (let choice of choices) {
        choice.addEventListener("click", weaponChoice);
    }
}
function refreshButton() {
    playerScore = 0;
    computerScore = 0;
    roundNumber = 0;
    computerChoice.innerHTML = "Computer choice:";
    playerChoice.innerHTML = "Player choice:";
    playerScoreOutput.innerHTML = "Player score: 0";
    computerScoreOutput.innerHTML = "Computer score: 0";
    arenaVictorOutput.innerHTML = "Winner:";
    roundOutput.innerHTML = "Round number: 0";
    refreshWeaponChoiceListener();
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