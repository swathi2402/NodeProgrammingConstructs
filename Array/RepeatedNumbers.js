let repeatedNumberArray = new Array();
for (let number = 1; number <= 100; number++) {
    if (number % 11 == 0) 
        repeatedNumberArray.push(number);
}
console.log("Repeated number array: " + repeatedNumberArray);