let readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

let flag = 0;
readline.question("Enter lower limit:", lowerInput => {
    readline.question("Enter upper limit:", upperInput => {
        for(let i = lowerInput; i <= upperInput; i++) {
            for(let j = 2; j < i; j++) {
                if(i % j == 0) {
                    console.log(i + " is not a Prime")
                    flag = 1;
                    break;
                }
                flag = 0;
            }
            if(flag == 0) {
                console.log(i + " is a Prime");
            }
            readline.close();
        }
    });
});