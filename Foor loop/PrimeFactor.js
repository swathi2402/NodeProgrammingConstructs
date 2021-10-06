let readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

let isPrime = 0;
readline.question("Enter number:", number => {

    while (number % 2 == 0) {
        console.log("2 ");
        number = Math.floor(number / 2);
    }
    for(let i = 3; i <= Math.floor(Math.sqrt(number)); i = i + 2) {
        while (number % i == 0) {
            console.log(i+" ");
            number = Math.floor(number / i);
        }
    }
    if (number > 2)
        console.log(number+ " ");
  readline.close();
});