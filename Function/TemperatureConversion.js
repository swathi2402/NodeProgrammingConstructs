let readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

function degFTodegC(t) {
    return (t - 32) * 5 / 9;
}

function degCTodegF(t) {
    return (t * 9 / 5) + 32;
}

let temperature = 100;

readline.question('1. Farenheit to Celcius 2. Celcius to Farenheit', m => {
    switch (Number(m)) {
        case 1: 
            console.log(degFTodegC(temperature));        
            break;
        case 2: 
            console.log(degCTodegF(temperature));      
            break;
        default: 
        console.log("Invalid input");
    }
    readline.close();
});