let singleDigit = Math.floor(Math.random() * 10) % 10;
console.log("Single digit: ", singleDigit);

let diceNumber = Math.floor(Math.random() * 10) % 6 + 1;
console.log("Dice number: ", diceNumber);

let firstDiceNumber = Math.floor(Math.random() * 10) % 6 + 1;
let secondDiceNumber = Math.floor(Math.random() * 10) % 6 + 1;
console.log("Addition of dice numbers", firstDiceNumber, "+", secondDiceNumber, ":", firstDiceNumber + secondDiceNumber);

let number1 = Math.floor(Math.random() * (99 - 10 + 1) + 10);
let number2 = Math.floor(Math.random() * (99 - 10 + 1) + 10);
let number3 = Math.floor(Math.random() * (99 - 10 + 1) + 10);
let number4 = Math.floor(Math.random() * (99 - 10 + 1) + 10);
let number5 = Math.floor(Math.random() * (99 - 10 + 1) + 10);
console.log("First number:", number1);
console.log("Second number:", number2);
console.log("Third number:", number3);
console.log("Fourth number:", number4);
console.log("Fifth number:", number5);
let sum = number1 + number2 + number3 + number4 + number5;
let average = sum / 5;
console.log("Sum: ", sum," Average: ", average);