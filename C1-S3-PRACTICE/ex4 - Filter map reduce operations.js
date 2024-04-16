let numbers = [1, 2, 3, 4, 5];

// Write the function to filter out even numbers from an array
// You need to use the array.filter() function
function filterEvenNumbers(array) {
  return array.filter(number => number % 2 === 0);
}

// Function to map array elements to their squared values
// You need to use the array.map() function
function squareNumbers(array) {
  return array.map(number => number * number);
}

// Function to compute the sum of array elements
// You need to use the array.reduce() function
function sumArray(array) {
  return array.reduce((a, b) => a + b, 0);
}

console.log("Even numbers:", filterEvenNumbers(numbers)); // [2, 4]
console.log("Squared numbers:", squareNumbers(numbers)); // [1, 4, 9, 16, 25]
console.log("Sum of numbers:", sumArray(numbers)); // 15