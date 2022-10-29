// Create an array of n length containing a squared sequence of x

function squares(x, n) {
  const result = []
  while (n >= 1) {
    result.push(x)
    x = x * x
    n--
  }
  return result
}

// The parameter is a starting integer and the desired length of the resulting array.
// Return the array containing the squares of x. If n is 0 or less, return an empty array.
// Declare an empty result variable.
// In a while loop, push x to the array. Then square x and decriment n.
// Return the array.