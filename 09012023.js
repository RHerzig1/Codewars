// Write a function that returns prime numbers with a gap of the given size.

function step(gap, begin, end) {
  const primes = [];

  for (let i = begin; i <= end; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }

  for (let i = 0; i < primes.length; i++) {
    for (let j = i + 1; j < primes.length; j++) {
      if (primes[j] - primes[i] > gap) {
        break;
      }

      if (primes[j] - primes[i] === gap) {
        return [primes[i], primes[j]];
      }
    }
  }

  return null;
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

console.log(step(2, 100, 110), [101, 103]);
console.log(step(4, 100, 110), [103, 107]);
console.log(step(6, 100, 110), [101, 107]);
console.log(step(8, 300, 400), [359, 367]);
console.log(step(10, 300, 400), [307, 317]);

// Three integers >= 2. Always valid numbers.
// Return the pair of prime numbers whose difference equals the gap. List is inclusive. Prime numbers don't have to be consecutive.

// Create an array of all the prime numbers between begin and end.
// Create two loops. Start at the first elem and move the 2nd index forward until a match is found or the gap is too big.
