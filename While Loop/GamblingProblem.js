let startingMoney=100; 
let numberOfBets = 0;
let numberOfWins = 0; 

while(startingMoney < 200 && startingMoney > 0) {
    numberOfBets++;
    let gamble = Math.random();
    if(gamble < 0.5) {
        startingMoney++;
        numberOfWins++;
    }
    else 
        startingMoney--;
}
console.log("Total number of bets: " + numberOfBets);
if(startingMoney == 0)
    console.log("Gambler lost");
else
    console.log("Gabler won");
console.log("Number of wins: " + numberOfWins);