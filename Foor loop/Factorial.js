let readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question("Enter number:", number => {
    if (number === 0) {
        console.log('Factorial is: 1');
    }
    else {
        let factorial = 1;
        for (i = 1; i <= number; i++) {
            factorial *= i;
        }
        console.log('Factorial is: '+ factorial);
    }
    readline.close();
});