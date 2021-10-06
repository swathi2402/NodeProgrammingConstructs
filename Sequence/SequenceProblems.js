let singleDigit = Math.floor(Math.random() * 10) % 10;
console.log("Single digit: ", singleDigit);

let diceNumber = Math.floor(Math.random() * 10) % 6 + 1;
console.log("Dice number: ", diceNumber);

let firstDiceNumber = Math.floor(Math.random() * 10) % 6 + 1;
let secondDiceNumber = Math.floor(Math.random() * 10) % 6 + 1;
console.log("Addition of dice numbers", firstDiceNumber, "+", secondDiceNumber, ":", firstDiceNumber + secondDiceNumber);