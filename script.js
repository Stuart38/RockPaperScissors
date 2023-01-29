// Function to get User Input
function getUserChoice(userInput) {
    userInput = userInput.toLowerCase(); 
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

// Determining winner.  Added concatenation for 'Congrats' message for some flavor.
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'This game is a tie!';
    }
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'Sorry, paper beats rock';
        } else {
            return 'Congratulations, rock beats ' + computerChoice + '!';
        }
    }

    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'Sorry, scissors beats paper!';
        } else {
            return 'Congratulations, paper beats' + computerChoice + '!';
        }
    }

    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'Sorry, rock beats scissors!';
        } else {
            return 'Congratulations, scissors beats' + computerChoice + '!';
        }
        
    }

    // Fun. 
    if (userChoice === 'bomb') {
        return 'Congratulations, you won!'
    }

};

// Playing the game-- calling the userChoice and computerChoice as parameters throws an error stating variable has already been delcared-- investigating this. 
function playGame() {
    const userChoice = getUserChoice('rock');
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw: ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
};

playGame();

