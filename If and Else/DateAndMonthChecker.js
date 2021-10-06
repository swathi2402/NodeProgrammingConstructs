let readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question("Enter date:", dateInput => {date = dateInput;
    readline.question("Enter month:", monthInput => {month = monthInput;
        if(month >= 3 && month <= 6) {
            console.log("True");
        } else
            console.log("False");
        readline.close();
    })
})