// Write a function that returns an array of integers that represent prime numbers forwards and backwards.

function backwardsPrime(start, end) {
  console.log(start, end);
  const primes = [];

  for (let i = start; i <= end; i++) {
    if (isPrime(i)) {
      const backwards = Number(String(i).split("").reverse("").join(""));

      if (i !== backwards && isPrime(backwards)) {
        primes.push(i)
      }
    }
  }

  return primes
}

function isPrime(num) {
  if (num <= 1) {
    return false;
  }

  if (num % 2 === 0 && num > 2) {
    return false;
  }

  const sqrt = Math.sqrt(num);

  for (let i = 3; i <= sqrt; i += 2) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(backwardsPrime(9900, 10000), [9923, 9931, 9941, 9967]);

// Two integers >= 0 representing the start and stop numbers (inclusive). Always valid numbers and the second is always greater than the first.
// Return an array of integers that are:
// 1. Prime numbers between the parameters.
// 2. Are also prime numbers when written backwards, and not the same (no palindromes).

// Create an array of all prime numbers.
// Filter the array by checking each elem backwards. Also check palindromes.
// Return the resulting array.
