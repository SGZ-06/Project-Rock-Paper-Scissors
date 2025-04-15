let humanScore = 0 
let computerScore = 0

function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3);
    //console.log(randomNum);
    switch (randomNum) {
        case 0:
            return 'rock';
            break;  
        case 1:
            return 'paper';
            break; 
        case 2:
            return 'scissors';
            break; 
        default:
            return 'game errror'
    }
}

function getHumanChoice() {
    return prompt('Enter your choice (rock, paper, or scissors):').toLowerCase();
    //console.log(userInput)
}

function playRound(humanChoice, computerChoice) {
    //console.log(humanChoice)
    if (humanChoice === computerChoice) {
        humanScore += 1;
        computerScore += 1;
        return 'It\'s a tie!';
    }
    else if (humanChoice === 'rock'){
        if (computerChoice === 'paper') {
            computerScore += 1;
            return 'Computer wins!';
        } else {
            humanScore += 1;
            return 'Human wins!';
        }
    }
    else if (humanChoice === 'paper') {
        if (computerChoice === 'scissors') {
            computerScore += 1;
            return 'Computer wins!';
        } else {
            humanScore += 1;
            return 'Human wins!';
        }
    }
    else if (humanChoice === 'scissors') {
        if (computerChoice === 'rock') {
            computerScore += 1;
            return 'Computer wins!';
        } else {
            humanScore += 1;
            return 'Human wins!';
        }
    }
}

function playgame() {
    for (let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        console.log(playRound(humanChoice, computerChoice));
        console.log('Partidas ganadas Humano: ' , humanScore);
        console.log('Partidas ganadas Computadora: ' , computerScore);
    }
}


playgame();