// Return sum of multiples of 3 and 5 between 0 and number

function solution(number){
  const cache = []
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      cache.push(i)
    }
  }
  return cache.reduce((a, c) => a + c, 0)
}

// A whole integer. May be positive or negative. Always a number.
// Return the sum of values between 0 and number that are multiples of 3 or 5. Only include each multiple once. If no values exist, return 0.

// Declare a cache array.
// Declare a for loop ranging from 0 to number. Push multiples of 3 or 5 into the cache array.
// Reduce the array and return the sum or 0.