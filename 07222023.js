// Write a function that returns the first set of consecutive prime numbers with a gap of the given size.

function gap(gap, start, end) {
  const primeNumbers = [];

  for (let i = start; i <= end; i += 1) {
    if (i % 2 === 0) {
      continue;
    }

    const isPrime = isPrimeNumber(i);

    if (!isPrime) {
      continue;
    }

    primeNumbers.push(i);
    const consecutiveDifference = primeNumbers
      .slice(-2)
      .reduce((a, c) => c - a);

    if (consecutiveDifference === gap) {
      return primeNumbers.slice(-2);
    }
  }

  return null;
}

function isPrimeNumber(num) {
  if (num <= 1) {
    return false;
  } else if (num <= 3) {
    return true;
  } else if (num % 2 === 0 || num % 3 === 0) {
    return false;
  }

  for (let i = 5; i <= Math.sqrt(num); i = i + 6) {
    if (num % i == 0 || num % (i + 2) == 0) {
      return false;
    }
  }

  return true;
}

console.log(gap(2, 2, 6), [5, 7]);
console.log(gap(4, 100, 110), [103, 107]);
console.log(gap(6, 100, 110), null);
console.log(gap(8, 300, 400), [359, 367]);

// Gap is an integer >= 2 indicating the size of gap. Always valid number.
// Start is an integer > 2 indicating the inclusive start of the search.
// End is an integer >= start indicating the inclusive end of the search.
// Return an array containing the fist pair of consecutive prime numbers that have a gap of the given size and are equal to or within the start and end parameters. If no answer exists, return null.

// Iterate from start to end, incrementing by 1.
// Create an array of prime numbers.
// Every time a new prime number is added, calculate the difference of the last two. If it equals gap, return the pair.
// If no pair is found, return null.
