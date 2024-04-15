let numbers = [1, 2, 3, 4, 5];

numbers.push(6);
console.log(numbers);

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

for (let i = 0; i < numbers.length; i++) {
    console.log("Element at index", i, ":", numbers[i]);
}

let index = 2; 
numbers.splice(index, 2); 
console.log(numbers);

let filter = numbers.filter(function(element) {
    return element >= 3;  
});
console.log(filter);

let transform = numbers.map(function(element) {
    return element * 2; 
});
console.log(transform);

