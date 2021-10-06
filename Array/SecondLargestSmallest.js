let numberArray = new Array();
for(let i=0; i<10; i++) {
    numberArray.push(Math.floor(Math.random() * (999 - 100 + 1) + 100));
}
console.log("Array of 10 random numbers: ", numberArray)

let max = Math.max.apply(null, numberArray); 
let temp_numbers = numberArray
temp_numbers.splice(temp_numbers.indexOf(max), 1); 
let secondLargest =  Math.max.apply(null, temp_numbers);

let min = Math.min.apply(null, numberArray); 
numberArray.splice(numberArray.indexOf(min), 1); 
let secondSmallest =  Math.min.apply(null, numberArray);

console.log("Second Largest number: " + secondLargest);
console.log("Second Smallest number: " + secondSmallest);
