let numberOfRolls = 11;
let dieRollMap = new Map();
for(let i = 0; i < numberOfRolls; i++){
    diceNumber = Math.floor(Math.random() * 10) % 6 + 1;
    dieRollMap.set(i, diceNumber);
} 
console.log(dieRollMap);