// Write an algorithm checks whether an integer is a prime number.

function isPrime(num) {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return true;
}
console.log(isPrime(7), true);
console.log(isPrime(4), false);

// An integer. May be positive or negative.
// Return a Boolean indicating whether or not the parameter is a prime number.

// If the number is 1 or less, return false.
// Loop through until i = the sqrt of the number. If the number divides evenly, return false.
// Return true.
