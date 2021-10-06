let readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question("Enter number:", numberInput => {number = numberInput;
    switch (Number (number)) {
    case 1: 
        console.log("Unit");
        break;
    case 10: 
        console.log("Ten");
        break;
    case 100: 
        console.log("Hundred");
        break;
    case 1000:
        console.log("Thousand");
        break;
    default: 
        console.log("Invalid input");
    }
    readline.close();
});