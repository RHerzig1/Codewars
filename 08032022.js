// Use rule of divisibility and stationary sequence to divide by 13
// Create a function that returns the stationary sequence of a number divided by 13. Caculate the sequence by reversing the parameter, and adding the products of each digit multiplied by the corresponding digit of this repeating pattern: [1, 10, 9, 12, 3, 4]. Repeat this until the parameter cannot be broken down any smaller. Return the final sum.

function thirt(n) {
  const pattern = [1, 10, 9, 12, 3, 4]
  let input = n
  let output = n
  do {
    input = output
    output = Array.from(output.toString()).map(Number).reverse().map((elem, index) => {
      return elem * pattern[index % 6]
    })
    output = output.reduce((a, b) => a + b, 0)
  } while (input != output)

  return output
}

// A positive integer.
// Return another positive integer.
// (1234567) -> 87
// Create a loop.
// Split the parameter into an array of numbers.
// Reverse the parameter.
// For each element of the parameter, multiply it by the corresponding index of the pattern [1, 10, 9, 12, 3, 4]. If the pattern reaches the last index and there are more elements from the parameter, loop back to the 0th index of the pattern.
// Reduce the products to find the sum.
// Repeat the loop until the result calculation equals the input integer.
// Return the output.