let numberArray = new Array();
for(let i=0; i<10; i++) {
    numberArray.push(Math.floor(Math.random() * (999 - 100 + 1) + 100));
}
console.log("Array of 10 random numbers: ", numberArray)

numberArray.sort();
console.log("Sorted Array: ", numberArray);
let secondLargest =  numberArray[1];
let secondSmallest =  numberArray[numberArray.length - 2];

console.log("Second Largest number: " + secondLargest);
console.log("Second Smallest number: " + secondSmallest);
