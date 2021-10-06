let readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

let primeFactors = new Array();
let divisor = 2;
readline.question("Enter number:", number => {

    while (number >= 2) {
        if (number % divisor == 0) {
        primeFactors.push(divisor);
        number = number / divisor;
        } else {
        divisor++;
        }
    }
    
    console.log("Prime Factors: " + primeFactors);
    readline.close();
});