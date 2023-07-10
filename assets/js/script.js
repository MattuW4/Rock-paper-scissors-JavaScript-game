// Declare global variables
const choices = document.querySelectorAll(".player-weapon-choice-button");
const playerChoice = document.querySelector("#playerChoice");
const computerChoiceOutput = document.querySelector(".computer-choice-output")

const weaponOptions = ["rock", "paper", "scissors"];
let = playerScore = 0;
let computerScore = 0;
let roundNumber = 0;

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
    updateScore(playerWeapon, computerWeapon);
}

// Function to display outcome and update scores
function scoreUpdate(playerWeapon, computerWeapon) {
    if (playerWeapon){
        computerChoiceOutput.innerHTML = `Computer choice: ${computerWeapon}` 
    }
}













// Modal for help button

//Variable declarations
const modal = document.getElementById("my-modal");
const openModal = document.getElementById("open-modal-button");
const closeModal = document.querySelector(".return-button");

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