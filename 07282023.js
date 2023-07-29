function sumOfDivided(arr) {
  const cache = {};
  const max = Math.max(...arr.map((elem) => Math.abs(elem)));

  for (let i = 2; i <= max; i++) {
    if (isPrime(i)) {
      cache[i] = false;
    }
  }

  for (const prop in cache) {
    arr.forEach((elem) => {
      if (elem % prop === 0) {
        cache[prop] = cache[prop] + elem;
      }
    });
  }

  const result = Object.entries(cache).filter((pair) => pair[1] !== false);
  return result.map((elem) => elem.map(Number));
}

function isPrime(num) {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

// Write a function that takes a list of integers and returns a list of prime numbers

console.log(sumOfDivided([12, 15]), [
  [2, 12],
  [3, 27],
  [5, 15],
]);
console.log(sumOfDivided([15, 21, 24, 30, 45]), [
  [2, 54],
  [3, 135],
  [5, 90],
  [7, 21],
]);
console.log(sumOfDivided([15, 30, -45]));

// An array of integers. May be positive or negative numbers. length >= 1.
// Return an array of value pairs. Include all prime numbers that are multiples from each integer, and the sum of each integer that are multiples of each prime number.

// Create a list of prime numbers less than or equal to the largest number of the parameter.
// Iterate through the prime number object and test each integer.
// If it's a multiple, add the value.
// Return a list of prime numbers and sums.
