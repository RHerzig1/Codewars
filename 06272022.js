// Calculate an integer's multiplicative persistence.
// Multiplicative persistence is how many times you multiply the individual digits of a number together until the product reaches a single digit.

function persistence(num) {
  let count = 0
  num = num.toString().split('')
  while (num.length > 1) {
    num = num.reduce((a, b) => a * b).toString().split('')
    count++
  }
  return count
}

// The parameter must be a positive integer.
// Return a positive integer counting the number of interations required to reach a single digit.
// 27 -> 2 (27 -> 2*7 = 14 -> 1*4 = 4)
// Declare count = 0
// Split the integer into an array.
// Use a while..loop to iterate through the array.
// While the array length is greater than 1, reduce it into it's product.
// Split the product and assign that to be the new array.
// Increment count += 1.
// When the while...loop is completed, return count.