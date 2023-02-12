// Return sum of multiples of 3 and 5 between 0 and number using constant time complexity

function solution(number){
  if (number < 0) return 0
  number = number - 1
  const three = Math.floor(number / 3) * (Math.floor(number / 3) + 1) / 2 * 3
  const five = Math.floor(number / 5) * (Math.floor(number / 5) + 1) / 2 * 5
  const fifteen = Math.floor(number / 15) * (Math.floor(number / 15) + 1) / 2 * 15
  return three + five - fifteen
}

console.log(solution(10), 23)
console.log(solution(20), 78)

// A whole integer. May be positive or negative. Always a number.
// Return the sum of values between 0 and number that are multiples of 3 or 5. Only include each multiple once. If no values exist, return 0.

// Declare a cache array.
// Declare a for loop ranging from 0 to number. Push multiples of 3 or 5 into the cache array.
// Reduce the array and return the sum or 0.