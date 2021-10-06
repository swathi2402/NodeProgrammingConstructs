let readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

let harmonic = 0;
readline.question("Enter number:", numberInput => {number = numberInput;
    for(let index = 1; index <= Number(number); index++){
        harmonic= harmonic+ Number(1 / index);    
    }
    console.log(harmonic);
    readline.close();
});