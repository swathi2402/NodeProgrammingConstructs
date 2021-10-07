let dieRollMap = new Map();
for(let i = 1; i <= 6; i++) {
    dieRollMap.set(i, 0);
}

while(true) {
    diceNumber = Math.floor(Math.random() * 10) % 6 + 1;
    let count = dieRollMap.get(diceNumber);
    dieRollMap.set(diceNumber, count + 1);
    if (count + 1 == 10)
        break;
} 
console.log(dieRollMap);
sortedMap = new Map([...dieRollMap.entries()].sort((a, b) => b[1] - a[1]));
maximun = Array.from(sortedMap.keys()).at(0);
minimum = Array.from(sortedMap.keys()).at(-1);
console.log("Maximum repeated: " + maximun + " Minimim repeated: " + minimum);
