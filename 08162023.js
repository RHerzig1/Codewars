// Write a function that converts a number into a string, including the commas.

const numToString = num => String(num).split('').map((elem, index, arr) => (arr.length - index) % 3 === 0 && index !== 0 ? ',' + elem : elem).join('');

console.log(numToString(1), '1')
console.log(numToString(10), '10')
console.log(numToString(100), '100')
console.log(numToString(1000), '1,000')
console.log(numToString(10000), '10,000')
console.log(numToString(100000), '100,000')
console.log(numToString(1000000), '1,000,000')
console.log(numToString(1234567890), '1,234,567,890')

// An integer >= 0.
// Return a string representing the number. Include commas e.g. 1,000,000.

// Split the string.
// Iterate through it.
// Add commas where needed.
// Join and return.