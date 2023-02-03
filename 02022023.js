// Return sum of multiples of 3 and 5 between 0 and number using constant time complexity

function solution(number) {
  number = number - 1
  const multiplesThree = Math.floor(number / 3)
  const sum = multiplesThree * (multiplesThree + 1) / 2
  const ans = sum * 3
  return ans
}

console.log(solution(10), 23)
console.log(solution(20), 78)

// A whole integer. May be positive or negative. Always a number.
// Return the sum of values between 0 and number that are multiples of 3 or 5. Only include each multiple once. If no values exist, return 0.

// Declare a cache array.
// Declare a for loop ranging from 0 to number. Push multiples of 3 or 5 into the cache array.
// Reduce the array and return the sum or 0.