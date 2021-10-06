let readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

function palindrome(number) {
    const reverseNum = parseFloat(number.toString().split('').reverse().join(''));
    if(number == reverseNum)
        return true;
    else
        return false;
}
function prime(number) {
    let flag = 0;
    for(let i = 2; i < number; i++){
        if(number % i == 0){
            flag = 1;
            break;
        }
    }
    if(flag == 1)
        return false;
    else
        return true;
}

readline.question("Enter number: ", (number) => {
    if(prime(number)) {
        console.log("Number is prime");
        if(palindrome(number))
            console.log("Number is palindrome");
        else
            console.log("Number is not palindrome");
    }
    else
        console.log("Number is not prime");
    readline.close();
});