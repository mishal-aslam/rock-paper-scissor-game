import randomInteger from "random-int";
import PromptSync from "prompt-sync";

// the available choices  we have 
let choices = ["rock", "paper", "scissors"]

//these will be the messages that are shown to the user
let userPrompt = "0 for rock , 1 for paper , 2 for scissors";
let outcome = "ready to play.";

//computer choice randomly
let computerChoice = randomInteger(0, 2);
computerChoice = choices[computerChoice];

// prompt the user for an input
const prompt = PromptSync();
let userInput = prompt(userPrompt);
let userChoice = choices[userInput];

if(computerChoice === userChoice){
    outcome = "Draw";
}
else if(computerChoice === "rock" && userChoice === "paper"){
    outcome = "Player Wins";
}

else if(computerChoice === "rock" && userChoice === "scissors"){
    outcome = "Computer Wins";
}

else if(computerChoice === "paper" && userChoice === "rock"){
    outcome = "Computer Wins";
}
else if(computerChoice === "paper" && userChoice === "scissors"){
    outcome = "Player Wins";
}

else if(computerChoice === "scissors" && userChoice === "paper"){
    outcome = "Player Wins";
}

else if(computerChoice === "scissors" && userChoice === "paper"){
    outcome = "Computer Wins";
}

console.log("computer chooses " + computerChoice);
console.log("player chooses " + userChoice);
console.log(outcome);



