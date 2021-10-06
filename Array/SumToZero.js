let numbersArray = new Array(-1, 0, 1);

let sum = numbersArray.reduce((a, b) => {
    return a + b;
});

if (sum == 0) 
    console.log("Sum of three numbers is zero");
else 
    console.log("Sum of three numbers  is not zero");
