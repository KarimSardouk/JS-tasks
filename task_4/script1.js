const fruits = ["apple", "banana", "orange"];
const numbers1 = new Array(1, 2, 3, 4, 5);

const numbers2 = Array.from([1, 2, 3], (x) => x * 2); // creates an array [2, 4, 6]
console.log(fruits)
console.log(numbers1)
console.log(numbers2)