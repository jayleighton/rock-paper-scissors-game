const weapons = ['Rock','Paper','Scissors','Lizard','Spock'];
const weaponsObj = {
    Rock: '<i class="far fa-hand-rock"></i>',
    Paper: '<i class="far fa-hand-paper"></i>',
    Scissors: '<i class="far fa-hand-scissors"></i>',
    Lizard: '<i class="far fa-hand-lizard"></i>',
    Spock: '<i class="far fa-hand-spock"></i>',
}




for (let i=0; i<=20; i++){
    let random = Math.floor(Math.random() * 5);
    console.log(random);
    let weaponName = weapons[random];
    console.log(weaponsObj[weaponName]);
}