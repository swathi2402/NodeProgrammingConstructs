let readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

let flag = 0;
readline.question("Enter number:", numberInput => {number = numberInput;
    for(let index = 2; index < number; index++){
        if(number % index == 0){
            console.log("Not Prime")
            flag = 1;
            break;
        }
    }
    if(flag == 0)
        console.log("Prime");
    readline.close();
});