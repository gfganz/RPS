let randomNumber = Math.floor(Math.random() * 3);
let computerPlay = '';
switch (randomNumber) {
    case 0: computerPlay = 'Rock';
    break;
    case 1: computerPlay = 'Paper';
    break;
    case 2: computerPlay = 'Scissors';
    break;
    }
console.log(computerPlay);