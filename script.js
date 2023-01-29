// Function to get User Input.  Added prompt get user input via separate window.  
function getUserChoice(userInput) {
    userInput = userInput.toLowerCase();
    userInput = prompt('Please choose rock, paper, or scissors.');
    if (userInput === 'rock' || userInput === 'scissors' || userInput === 'paper' || userInput === 'bomb') {
        return userInput
    } else {
        console.log('Error, please type: rock, paper, or scissors.');
        }
}


// Function to get Computer choice-- 'Math' methods are fun, as is the switch case.
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
};

// Global variables for scores:
let userScore = 0;
let computerScore = 0;

// Determining winner.  Added concatenation for 'Congrats' message for some flavor.
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'This game is a tie!';
    }
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'Sorry, paper beats rock';
            computerScore += 1;
        } else {
            return 'Congratulations, rock beats ' + computerChoice + '!';
            userScore += 1;
        }
    }

    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'Sorry, scissors beats paper!';
            computerScore += 1;
        } else {
            return 'Congratulations, paper beats' + computerChoice + '!';
            userScore += 1;
        }
    }

    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'Sorry, rock beats scissors!';
            computerScore += 1;
        } else {
            return 'Congratulations, scissors beats' + computerChoice + '!';
            userScore += 1;
        }
        
    }

    // 'Bomb' choice added for win condition.  
    if (userChoice === 'bomb') {
        return 'Congratulations, you won!'
        userScore += 1;
    }

};

// Added the loop to run the game five times. 
function playGame() {
    for (let i = 0; i < 5; i++) {
        const userChoice = getUserChoice('rock');
        const computerChoice = getComputerChoice();
        console.log('You threw: ' + userChoice);
        console.log('The computer threw: ' + computerChoice);
        console.log(determineWinner(userChoice, computerChoice));
    }
}

playGame();

