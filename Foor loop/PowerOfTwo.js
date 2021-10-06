let readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question("Enter number:", numberInput => {number = numberInput;
    for(let power=0; power <= number; power++){
        console.log(power + ": " + Math.pow(2,power));
    }
    readline.close();
});