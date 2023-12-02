const weapons = ['rock','paper','scissors','lizard','spock'];
const weaponsObj = {
    Rock: '<i class="far fa-hand-rock"></i>',
    Paper: '<i class="far fa-hand-paper"></i>',
    Scissors: '<i class="far fa-hand-scissors"></i>',
    Lizard: '<i class="far fa-hand-lizard"></i>',
    Spock: '<i class="far fa-hand-spock"></i>',
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
    checkWinner(userWeapon, computerWeapon);


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
    
    if (userWeapon === 'rock') {
        if (computerWeapon === 'scissors' || computerWeapon === 'lizard'){
            let winner = 'user';
            let result = resultMessage(userWeapon, computerWeapon);
            return [winner, result];
        } else{
            let winner = 'computer';
            let result = resultMessage(computerWeapon, userWeapon);
        }
    } else if (userWeapon === 'paper') {
        if (computerWeapon === 'rock' || computerWeapon == 'spock'){
            let winner = 'user';
            let result = resultMessage(userWeapon, computerWeapon);
        } else {
            let winner = 'computer';
            let result = resultMessage(computerWeapon, userWeapon);
        }
    }  else if (userWeapon === 'scissors') {
        if (computerWeapon === 'lizard' || computerWeapon === 'paper') {
            let winner = 'user';
            let result = resultMessage(userWeapon, computerWeapon);
        } else {
            let winner = 'computer';
            let result = resultMessage(computerWeapon, userWeapon);
        }
    } else if (userWeapon === 'lizard'){
        if (computerWeapon === 'spock' || computerWeapon === 'paper'){
            let winner = 'user';
            let result = resultMessage(userWeapon, computerWeapon);
        } else {
            let winner = 'computer';
            let result = resultMessage(computerWeapon, userWeapon);
        }
    } else if (userWeapon === 'spock'){
        if (computerWeapon === 'scissors' || computerWeapon === 'rock'){
            let winner = 'user';
            let result = resultMessage(userWeapon, computerWeapon);
        } else {
            let winner = 'computer';
            let result = resultMessage(computerWeapon, userWeapon);
        }
    }
    



}


function resultMessage(winningWeapon, losingWeapon) {

}




// for (let i=0; i<=20; i++){
//     let random = Math.floor(Math.random() * 5);
//     console.log(random);
//     let weaponName = weapons[random];
//     console.log(weaponsObj[weaponName]);
// }