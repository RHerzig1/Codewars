// Write a function that predicts your max age.

function predictAge(...ages) {
  return Math.floor(Math.sqrt(ages.reduce((a, c) => a + c * c, 0)) / 2);
}

console.log(predictAge(65, 60, 75, 55, 60, 63, 64, 45), 86);
console.log(predictAge(94, 71, 39, 85, 78, 98, 21, 39), 100);
console.log(predictAge(99, 91, 43, 29, 55, 20, 48, 93), 93);

// Eight positive integers refering to your great grandparent's ages. Never zero.
// Add the squares of each integer, then find the square root and divide by two. Round down to the nearest integer.