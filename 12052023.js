// Write a function that incorrectly adds two numbers.

function add(num1, num2) {
  num1 = String(num1).split("").reverse().join("");
  num2 = String(num2).split("").reverse().join("");
  const maxLength = Math.max(num1.length, num2.length);
  const result = [];

  for (let i = 0; i < maxLength; i++) {
    result.push(Number(num1[i] || 0) + Number(num2[i] || 0));
  }

  return Number(result.reverse().join(""));
}

console.log(add(2, 11), 13);
console.log(add(0, 1), 1);
console.log(add(0, 0), 0);
console.log(add(16, 18), 214);
console.log(add(26, 39), 515);
console.log(add(122, 81), 1103);

// Two numbers >= 0. Always positive integers. Always valid numbers.
// Return the numbers added in such a way that 16 + 18 = 214. For example, 6 + 8 = 14 and 1 + 1 = 2.

// Loop through each number from right to left.
// Add to a result array.
// Join and return as a number.