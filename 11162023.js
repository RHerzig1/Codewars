// Write a function that takes two number and returns a list of digits that contain the number.

function numbersWithDigitInside(x, d) {
  const result = [0, 0, 0];
  const cache = [];
  const regex = new RegExp(x);

  for (let i = 1; i <= x; i++) {
    if (String(i).includes(String(d))) {
      cache.push(i);
    }
  }

  if (cache.length === 0) {
    return result;
  }

  result[0] = cache.length;
  result[1] = cache.reduce((a, c) => c + a, 0);
  result[2] = cache.reduce((a, c) => c * a, 1);
  return result;
}

console.log(numbersWithDigitInside(11, 1), [3, 22, 110]);
console.log(numbersWithDigitInside(5, 6), [0, 0, 0]);
console.log(numbersWithDigitInside(20, 0), [2, 30, 200]);

// A positive integer x > 0. And a positive number 0 <= d >= 9. Both are always valid numbers.
// Return an array containing 3 numbers: [the count of numbers between 0 and x (inclusive), the sum of those numbers, the product ofthose numbers.]

// Declare a result array = [0, 0, 0]
// Declare a cache array = []
// Use a for loop to iterate through 0 - x. Convert each number to a  string. If that string contains d, push it to the cache.
// result[0] = cache.length;
// result[1] = cache.reduce(add)
// result[2] = cache.reduce(multiply)
// Return result.
