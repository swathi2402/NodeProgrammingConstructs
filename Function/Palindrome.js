let readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

function palindromeChecker(number){
    const reverseNum = parseFloat(number.toString().split('').reverse().join(''));
    console.log(reverseNum);
    if(number == reverseNum)
        return true;
    else
        return false;
}

readline.question("Enter number: ", (number) =>{
    if(palindromeChecker(Number(number)))
        console.log("Palindrome");
    else
        console.log("Not Palindrome");
    readline.close();
});
