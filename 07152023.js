// Write a function that returns the nth digit of a number.

function findDigit(num, nth) {
  if (nth <= 0) {
    return -1
  }
  
  const arr = Array.from(String(num)).map(Number).reverse();
  return arr[nth - 1] || 0;
}

console.log(findDigit(5673, 4), 5);
console.log(findDigit(129, 2), 2);
console.log(findDigit(-2825, 3), 8);
console.log(findDigit(-456, 4), 0);
console.log(findDigit(0, 20), 0);
console.log(findDigit(65, 0), -1);
console.log(findDigit(24, -8), -1);

// Num is an integer. If it's negative, treat it like a positive. Nth may be positive or negative.
// Starting from the right and moving towards the left, return the nth digit of num.
// If nth is negative, return -1.
// If num doesn't have an nth digit, return 0.

// If nth is 0 or less, return -1.
// Split num into an array and reverse it.
// Use bracket notation to return that index, or 0.