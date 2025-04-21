let humanScore = 0;
let computerScore = 0;
let button1 = document.createElement("button");
let button2 = document.createElement("button");
let button3 = document.createElement("button");
button1.textContent = "rock";
button2.textContent = "paper";
button3.textContent = "scissors";
document.body.appendChild(button1);
document.body.appendChild(button2);
document.body.appendChild(button3);
let div = document.createElement("div");
let results = document.createElement("p");
let humanScores = document.createElement("p");
let computerScores = document.createElement("p");
let announceWinner = document.createElement("p");
div.appendChild(results);
div.appendChild(humanScores);
div.appendChild(computerScores);
div.appendChild(announceWinner);
document.body.appendChild(div);

function getComputerChoice() {
  const randomNum = Math.floor(Math.random() * 3);
  //console.log(randomNum);
  switch (randomNum) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;

    default:
      return "game errror";
  }
}

function playRound(humanChoice) {
  //console.log(humanChoice)
  let computerChoice = getComputerChoice();
  if (humanChoice === computerChoice) {
    humanScore += 1;
    computerScore += 1;
    results.textContent = "It's a tie!";
  } else if (humanChoice === "rock") {
    if (computerChoice === "paper") {
      computerScore += 1;
      results.textContent = "Computer wins!";
    } else {
      humanScore += 1;
      results.textContent = "Human wins!";
    }
  } else if (humanChoice === "paper") {
    if (computerChoice === "scissors") {
      computerScore += 1;
      results.textContent = "Computer wins!";
    } else {
      humanScore += 1;
      results.textContent = "Human wins!";
    }
  } else if (humanChoice === "scissors") {
    if (computerChoice === "rock") {
      computerScore += 1;
      results.textContent = "Computer wins!";
    } else {
      humanScore += 1;
      results.textContent = "Human wins!";
    }
  }
}

function showResults() {
  //return prompt("Enter your choice (rock, paper, or scissors):").toLowerCase();
  //console.log(userInput)
  announceWinner.hidden = true;
  humanScores.textContent = "Partidas ganadas Humano: " + humanScore;
  computerScores.textContent = "Partidas ganadas Computadora: " + computerScore;
  if (humanScore === 5 && computerScore === 5) {
    announceWinner.textContent = "The game ended in a tie.";
    announceWinner.hidden = false;
    humanScore = 0;
    computerScore = 0;
  } else if (humanScore >= 5) {
    announceWinner.textContent = "Human Wins the game!";
    announceWinner.hidden = false;
    humanScore = 0;
    computerScore = 0;
  } else if (computerScore >= 5) {
    announceWinner.textContent = "Computer Wins the game!";
    announceWinner.hidden = false;
    humanScore = 0;
    computerScore = 0;
  }
}

function playgame() {
  //for (let i = 0; i < 5; i++) {
  //let humanChoice = getHumanChoice();

  button1.addEventListener("click", function (event) {
    playRound(event.target.textContent);
  });
  button2.addEventListener("click", function (event) {
    playRound(event.target.textContent);
  });
  button3.addEventListener("click", function (event) {
    playRound(event.target.textContent);
  });

  button1.addEventListener("click", showResults);
  button2.addEventListener("click", showResults);
  button3.addEventListener("click", showResults);

  //console.log(playRound(humanChoice, computerChoice));

  //console.log("Partidas ganadas Humano: ", humanScore);
  //console.log("Partidas ganadas Computadora: ", computerScore);

  //}
}

playgame();
