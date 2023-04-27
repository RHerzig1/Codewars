// Write a function that finds the next perfect square

function findNextSquare(num) {
  const root = Math.sqrt(num);
  return root % 1 === 0 ? (root + 1) ** 2 : -1;
}

console.log(findNextSquare(121), 144);
console.log(findNextSquare(625), 676);
console.log(findNextSquare(123), -1);

// A positive integer greater than 0.
// If the number is a perfect square, return the next perfect square. Else return -1.

// Calculate the root of num.
// If the root is a whole number, return root + 1 squared. Otherwise, return -1.
