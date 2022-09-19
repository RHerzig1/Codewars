// Create array with multiples of number

function countBy(x, n) {
  const result = []
  for (let i = 1; result.length < n; i++) {
    result.push(i * x)
  }
  return result
}

// Parameters are the base number, and the number of multiples to include in the return.
// Return the multiples as an array.
// countBy(1,10) -> [1,2,3,4,5,6,7,8,9,10]
// countBy(2,5) -> [2,4,6,8,10]
// Declare a result variable equal to an empty array.
// Use a for loop to iterate through the array.
// For each iteration, push i * x into result.
// When it's finished, return result.