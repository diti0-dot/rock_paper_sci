const rockImg = "rock.png";
const paperImg = "paper.png";
const scissImg = "sciss.png";

const imageContainer = document.getElementById('choice-image');
const compImg = document.getElementById("comp-image");
const userScoreElement = document.getElementById('Your');
const computerScoreElement = document.getElementById('Compp');

// Initialize scores
let userScore = 0;
let computerScore = 0;

// Add event listeners for buttons
document.getElementById('rock-button').addEventListener('click', () => handleUserChoice('rock'));
document.getElementById('paper-button').addEventListener('click', () => handleUserChoice('paper'));
document.getElementById('scissors-button').addEventListener('click', () => handleUserChoice('scissors'));

function handleUserChoice(userChoice) {
    // Show user's choice
    showImage(userChoice);

    // Get and display computer's choice
    const computerChoice = getComputerChoice();
    showCompImg(computerChoice);

    // Determine the result and update the score
    const result = getResult(userChoice, computerChoice);
    updateScore(result);
}

function showImage(choice) {
    imageContainer.innerHTML = ''; // Clear the container before appending a new image

    const img = document.createElement('img');

    if (choice === "rock") {
        img.src = rockImg;
        img.alt = "rock";
    } else if (choice === "paper") {
        img.src = paperImg;
        img.alt = "paper";
    } else if (choice === "scissors") {
        img.src = scissImg;
        img.alt = "scissors";
    }

    imageContainer.appendChild(img);
}

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * 3);
    return choices[random];
}

function showCompImg(computerChoice) {
    const img = document.createElement('img');

    if (computerChoice === "rock") {
        img.src = rockImg;
        img.alt = "rock";
    } else if (computerChoice === "paper") {
        img.src = paperImg;
        img.alt = "paper";
    } else if (computerChoice === "scissors") {
        img.src = scissImg;
        img.alt = "scissors";
    }

    compImg.innerHTML = ''; // Clear previous computer choice image
    compImg.appendChild(img); // Append the image to the container
}

// Determine the result of the game
function getResult(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "draw";
    }
    if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        return "win";
    }
    return "lose";
}

// Update the score based on the result
function updateScore(result) {
    if (result === "win") {
        userScore++;
    } else if (result === "lose") {
        computerScore++;
    }

    // Update the score display
    userScoreElement.textContent = userScore;
    computerScoreElement.textContent = computerScore;
    checkEndGame();
}
function checkEndGame() {
    if (userScore + computerScore === 6) {
        let message;
        
        if (userScore > computerScore) {
            message = `Congratulations! You won the game with a score of ${userScore} to ${computerScore}! 🎉`;
        } else if (computerScore > userScore) {
            message = `Oh no! The computer won the game with a score of ${computerScore} to ${userScore}. Better luck next time! 🤖`;
        } else {
            message = `It's a draw! Both scored ${userScore}. 😮`;
        }

        alert(message); // Display the winner
        resetGame();    // Reset the game for another round
    }
}


// Reset the game
function resetGame() {
    userScore = 0;
    computerScore = 0;

    userScoreElement.textContent = userScore;
    computerScoreElement.textContent = computerScore;

    imageContainer.innerHTML = '';
    compImg.innerHTML = '';
}
