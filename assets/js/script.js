const weapons = ['rock','paper','scissors','lizard','spock'];
const weaponsObj = {
    rock: ["far", "fa-hand-rock"],
    paper: ["far", "fa-hand-paper"],
    scissors: ["far", "fa-hand-scissors"],
    lizard: ["far", "fa-hand-lizard"],
    spock: ["far", "fa-hand-spock"],
}


// Wait for DOM to finish loading then create event listeners
document.addEventListener("DOMContentLoaded", function () {

    // Get all of the button elements
    let buttons = document.getElementsByTagName('button');
    for (let button of buttons) {
        button.addEventListener('click', function () {
            // Add event for the instructions button
            if (this.getAttribute('data-type') === 'instructions'){
                toggleInstructions();
            } else if (this.getAttribute('data-type') === 'rock' || this.getAttribute('data-type') === 'paper' || this.getAttribute('data-type') === 'scissors' || this.getAttribute('data-type') === 'lizard' 
            || this.getAttribute('data-type') === 'spock') {
                // Set the users weapon
                let userWeapon = this.getAttribute('data-type');
                startGame(userWeapon);
            } 
            else {
                console.log(this.getAttribute('data-type'));
            }
        })
    }
})

/**
 * Starts the round by receiving the users choice. 
*/
function startGame(userWeapon){
    // Set the computers weapon
    let computerWeapon = computerChoice();
    // Compute the winner and get the message text
    let winner = checkWinner(userWeapon, computerWeapon);
    // Toggle the computer choice elements
    toggleChoiceAndFeedback(computerWeapon);
    



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
 * Generates a random selection of a weapon and returns it to the calling function
 */
function computerChoice() {
    //Generate random number between 0 and 4
    let random = Math.floor(Math.random() * 5);
    return weapons[random];

}

/**
 * Receives the users selected weapon and the computers randomly selected weapon and computes the winner.
 * The display is toggled and the winner is returned to the calling function
 */
function checkWinner(userWeapon, computerWeapon) {
    
    if (userWeapon === computerWeapon) {
        let winner = 'draw';
        let result = "The round is tied!";
        return [winner, result];
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
 * Receives the winning and loosing weapons and returns the result
 * 
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

function toggleChoiceAndFeedback(computerSelectedWeapon) {

    if (document.getElementById('computer-choice').classList.contains('hidden')) {
        document.getElementById('computer-choice').classList.remove('hidden');
    }

    if (document.getElementById('feedback-area').classList.contains('hidden')) {
        document.getElementById('feedback-area').classList.remove('hidden');
    }

    
    let newClasses = weaponsObj[computerSelectedWeapon];
    let currentClasses = document.getElementById('computer-button').classList;
    
    while (currentClasses.length > 0) {
        let item = currentClasses[0];
        currentClasses.remove(item);
    }

    for (let i=0; i < newClasses.length; i++){
        currentClasses.add(newClasses[i]);
    }
}




// for (let i=0; i<=20; i++){
//     let random = Math.floor(Math.random() * 5);
//     console.log(random);
//     let weaponName = weapons[random];
//     console.log(weaponsObj[weaponName]);
// }