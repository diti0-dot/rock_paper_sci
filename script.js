function getComputerChoice(){
    let choice = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * 3);
    return choice[random]; 
}

console.log(getComputerChoice());

function getUserChoice(){
    let choice = prompt("Enter your choice: ");
    return choice;
}

let getChoice = getUserChoice();
let UserChoice = getChoice?.toLowerCase();

if(UserChoice === null || !["rock", "paper", "scissors"].includes(UserChoice)){
    alert("Invalid choice");
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        return "It's a tie!";
    } else if(humanChoice === "rock" && computerChoice === "scissors" || 
              humanChoice === "paper" && computerChoice === "rock" || 
              humanChoice === "scissors" && computerChoice === "paper"){
        humanScore++;
        return "You win!";
    } else {
        computerScore++;
        return "You lose!";
    }
}

let computerChoice = getComputerChoice();
console.log(playRound(UserChoice, computerChoice)); 
console.log("Human Score: " + humanScore);
console.log("Computer Score: " + computerScore);
