let readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question("Enter number:", number => {
    let index = 0;
    while(index <= number){
        console.log(index + ":" + Math.pow(number, index));
        index++;
    }
    readline.close();
});