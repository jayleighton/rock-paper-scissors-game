// Wait for DOM to finish loading then create event listeners for buttons
document.addEventListener("DOMContentLoaded", function () {

    // Get all of the button elements
    let buttons = document.getElementsByTagName('button');
    for (let button of buttons) {
        button.addEventListener('click', function () {
            if (this.getAttribute('data-from') !== 'computer') {
                // Add event for the instructions button
                if (this.getAttribute('data-type') === 'instructions'){
                    toggleInstructions();
                } else {
                    // Set the users weapon
                    let userWeapon = this.getAttribute('data-type');
                    startGame(userWeapon);
                } 
            } else {
                console.log("Computer choice button clicked");
            }
        });
    }
});

/**
 * Starts the round after receiving the users choice. 
*/
function startGame(userWeapon){
    // Disable user buttons until result is shown
    toggleUserButtons('off');
    // Set the computers weapon
    let computerWeapon = computerChoice();
    // Compute the winner and get the message text
    let winner = checkWinner(userWeapon, computerWeapon);
    // Toggle the computer choice elements after a delay
    setTimeout(() => {toggleChoiceAndFeedback(computerWeapon); }, 500);
    // Update the Winner and message on screen
    toggleWinnerMessage(winner);
    // Update the round scores
    updateScores(winner);
    // Clear the result elements after a delay
    setTimeout(() => {clearResult();}, 2000);
}

/**
 * Toggles the disabled property of the user buttons based on the toggleState parameter
 * A valud of 'off' will disable the buttons and any other value will enable the buttons
 */
function toggleUserButtons(toggleState){
    let buttons = document.getElementsByTagName('button');
    for (let button of buttons) {
        if (button.getAttribute('data-from') === 'user' && button.getAttribute('data-type') !== 'instructions') {
            if (toggleState === 'off') {
                // disable button
                button.disabled = true;
            } else {
                //enable button
                button.disabled = false;
            }
        }
    }
}

/**
 * Get the classes for the instructions sections and toggles the visibility
 */
function toggleInstructions() {
    // Get class list for instrcutions section
    let classes = document.getElementById('instructions').classList;
    
    // Check if section is hidden or visible
    if (classes.contains('hidden')) {
        // unhide the section
        classes.remove('hidden');
    } else {
        // hide the section
        classes.add('hidden');
    }

    // Update the component
    document.getElementById('instructions').classList = classes;

}

/**
 * Generates a random selection of a weapon for the computer and returns it to the calling function
 */
function computerChoice() {
    // List of weapons
    const weapons = ['rock','paper','scissors','lizard','spock'];
    //Generate random number between 0 and 4
    let random = Math.floor(Math.random() * 5);
    return weapons[random];
}

/**
 * Receives the users selected weapon and the computers randomly selected weapon and computes the winner.
 * Calls the function to get the winning message based on the winning and losing weapon combination
 * The winner and the winning message are returned as an array
 */
function checkWinner(userWeapon, computerWeapon) {
    
    // Check for a draw
    if (userWeapon === computerWeapon) {
        let winner = 'draw';
        let result = "The round is tied!";
        return [winner, result];
    // Test the various user weapons against the computers selection
    } else if (userWeapon === 'rock') {
        if (computerWeapon === 'scissors' || computerWeapon === 'lizard'){
            let winner = 'user';
            let result = resultMessage(userWeapon, computerWeapon);
            return [winner, result];
        } else{
            let winner = 'computer';
            let result = resultMessage(computerWeapon, userWeapon);
            return [winner, result];
        }
    } else if (userWeapon === 'paper') {
        if (computerWeapon === 'rock' || computerWeapon == 'spock'){
            let winner = 'user';
            let result = resultMessage(userWeapon, computerWeapon);
            return [winner, result];
        } else {
            let winner = 'computer';
            let result = resultMessage(computerWeapon, userWeapon);
            return [winner, result];
        }
    }  else if (userWeapon === 'scissors') {
        if (computerWeapon === 'lizard' || computerWeapon === 'paper') {
            let winner = 'user';
            let result = resultMessage(userWeapon, computerWeapon);
            return [winner, result];
        } else {
            let winner = 'computer';
            let result = resultMessage(computerWeapon, userWeapon);
            return [winner, result];
        }
    } else if (userWeapon === 'lizard'){
        if (computerWeapon === 'spock' || computerWeapon === 'paper'){
            let winner = 'user';
            let result = resultMessage(userWeapon, computerWeapon);
            return [winner, result];
        } else {
            let winner = 'computer';
            let result = resultMessage(computerWeapon, userWeapon);
            return [winner, result];
        }
    } else if (userWeapon === 'spock'){
        if (computerWeapon === 'scissors' || computerWeapon === 'rock'){
            let winner = 'user';
            let result = resultMessage(userWeapon, computerWeapon);
            return [winner, result];
        } else {
            let winner = 'computer';
            let result = resultMessage(computerWeapon, userWeapon);
            return [winner, result];
        }
    }
}

/**
 * Receives the winning and loosing weapons and returns the result message
 */
function resultMessage(winningWeapon, losingWeapon) {

    if (winningWeapon === 'rock' && losingWeapon === 'scissors'){
        return "Rock breaks Scissors";
    } else if (winningWeapon === 'rock' && losingWeapon === 'lizard') {
        return "Rock crushes Lizard";
    } else if (winningWeapon === 'paper' && losingWeapon === 'rock') {
        return "Paper covers Rock";
    } else if (winningWeapon === 'paper' && losingWeapon === 'spock') {
        return "Paper disproves Spock";
    } else if (winningWeapon === 'scissors' && losingWeapon === 'paper') {
        return "Scissors cuts Paper";
    } else if (winningWeapon === 'scissors' && losingWeapon === 'lizard') {
        return "Scissors decapitates Lizard";
    } else if (winningWeapon === 'lizard' && losingWeapon === 'spock') {
        return "Lizard poisons Spock";
    } else if (winningWeapon === 'lizard' && losingWeapon === 'paper') {
        return "Lizard eats Paper";
    } else if (winningWeapon === 'spock' && losingWeapon === 'scissors') {
        return "Spock melts Scissors";
    } else if (winningWeapon === 'spock' && losingWeapon === 'rock') {
        return "Spock vaporizes Rock";
    }
}

/**
 * Updates the computer choice and feedback elements to be visible.
 * Updates the computer choice icon and data-type attribute
 */
function toggleChoiceAndFeedback(computerSelectedWeapon) {
    // Create weapons object
    const weaponsObj = {
        rock: ["far", "fa-hand-rock"],
        paper: ["far", "fa-hand-paper"],
        scissors: ["far", "fa-hand-scissors"],
        lizard: ["far", "fa-hand-lizard"],
        spock: ["far", "fa-hand-spock"],
    };
    // Check if the element is hidden and make it visible
    if (document.getElementById('computer-choice').classList.contains('hidden')) {
        document.getElementById('computer-choice').classList.remove('hidden');
    }

    // Check if the element is hidden and make it visible
    if (document.getElementById('feedback-area').classList.contains('hidden')) {
        document.getElementById('feedback-area').classList.remove('hidden');
    }

    // Get the classes to be displayed
    let newClasses = weaponsObj[computerSelectedWeapon];
    // Get the current class List
    let currentClasses = document.getElementById('computer-button').classList;
    
    // Loop through the element classList and remove all items
    while (currentClasses.length > 0) {
        let item = currentClasses[0];
        currentClasses.remove(item);
    }

    // Loop through the WeaponsObj array and add the required classes for the icon display
    for (let i=0; i < newClasses.length; i++){
        currentClasses.add(newClasses[i]);
    }

    // Update the data-type attribute
    document.getElementById('computer-selection-button').setAttribute('data-type', computerSelectedWeapon);
}

/**
 * Receives the winner and message as an array and updates the components on the screen
 */
function toggleWinnerMessage(winnerData) {
    
    //Update the winner text
    if (winnerData[0] === 'user'){
        document.getElementById('result-action').innerText = 'You Win!';
    } else if (winnerData[0] === 'draw') {
        document.getElementById('result-action').innerText = 'Draw!';
    } else {
        document.getElementById('result-action').innerText = 'You Lose!';
    }
    
    //Update the winning message
    document.getElementById('result').innerText = winnerData[1];

    // Show the computer choice
    document.getElementById('computer-choice').classList.remove('hidden');
}

/**
 * Received the winner and updates the round and game scores as required
 */
function updateScores(winnerData) {
    if ( winnerData[0] === 'draw') {
        //Update round number only
        updateRoundNumber();
    } else if (winnerData[0] === 'user') {
        //Increment user round score
        let userRoundScore = parseInt(document.getElementById('user-round-score').innerText);
        userRoundScore += 1;
        document.getElementById('user-round-score').innerText = userRoundScore;
        if (userRoundScore >= 3){
            //Game is over. Increment game score and set round back to 0
            updateGameScore('user');
            resetRoundScores();
        } else {
            // Increment the round score for the user
            updateRoundNumber();
        }

    } else {
        // Increment computer score
        let computerRoundScore = parseInt(document.getElementById('computer-round-score').innerText);
        computerRoundScore += 1;
        document.getElementById('computer-round-score').innerText = computerRoundScore; 
        if (computerRoundScore >= 3) {
            //Game is over. Increment game score and set round back to 0
            updateGameScore('computer');
            resetRoundScores();
        } else {
            // Increment the round score for the computer player
            updateRoundNumber();
        }
    }
}

/**
 * Receives the winner when one opponent has reached a round score of 3.
 * Increments the game score for the winner of the game.
 */
function updateGameScore(winnerToUpdate) {
    if (winnerToUpdate === 'user') {
        // Get current score
        let gameScore = parseInt(document.getElementById('user-main-score').innerText);
        // Increment current score
        gameScore += 1;
        // Update elements
        document.getElementById('user-main-score').innerText = gameScore;
        document.getElementById('game-winner').innerText = 'Game Over. You won!';
        document.getElementById('game-winner').classList.remove('hidden');
        setTimeout(() => {document.getElementById('game-winner').classList.add('hidden');}, 2000 );
    } else {
        // Get current score
        let gameScore = parseInt(document.getElementById('computer-main-score').innerText);
        // Increment current score
        gameScore += 1;
        // Update elements
        document.getElementById('computer-main-score').innerText = gameScore;
        document.getElementById('game-winner').innerText = 'Game Over. You Lost!';
        document.getElementById('game-winner').classList.remove('hidden');
        setTimeout(() => {document.getElementById('game-winner').classList.add('hidden');}, 2000 );
    }
}

/**
 * Resets the round scores and the round count to zero
 */
function resetRoundScores() {

    document.getElementById('user-round-score').innerText = 0;
    document.getElementById('round-num').innerText = 0;
    document.getElementById('computer-round-score').innerText = 0;
}

/**
 * Increments the round number by 1
 */
function updateRoundNumber() {
    let roundNum = parseInt(document.getElementById('round-num').innerText);
    roundNum += 1;
    document.getElementById('round-num').innerText = roundNum;
    
}

/**
 * Clears the winner text and the winning message from the screen
 * Hides the computer choice button
 */
function clearResult() {
    //Clear text elements
    document.getElementById('result-action').innerText = '';
    document.getElementById('result').innerText = '';
    document.getElementById('computer-choice').classList.add('hidden');

    // Clear the computer choice button classes
    let computerButtonClasses = document.getElementById('computer-button').classList;
    while (computerButtonClasses.length > 0) {
        computerButtonClasses.remove(computerButtonClasses[0]);
    }
    // Clear the data type attribute for the computer choice
    document.getElementById('computer-selection-button').setAttribute('data-type','');

    //Enable user buttons
    toggleUserButtons('on');
}


