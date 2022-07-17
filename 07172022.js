// Sum of consecutive powers
// Within the range of a - b, return the numbers where 1st digit^1 + 2nd digit^2 + 3rd digit^3 + ... equals the original number.

function sumDigPow(a, b) {
  let pass = []
  for (let i = a; i <= b; i++) {
    let test = Array.from(i.toString()).map(Number)
    test = test.map((elem, index) => elem**(index + 1)).reduce((a, b) => a + b, 0)
    if (test === i) pass.push(test)
  }
  return pass
}

// The parameters are two integers, a and b. This is the inclusive range of numbers to calculate.
// Return an array containing the original numbers that pass the testing function.
// (1, 100) => [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
// Declare an empty array.
// Create a for loop. i = a, and runs as long as i <= b.
// Convert i into an array where each digit is its own element.
// For each element of the array, increase it by the power 1 + index.
// Reduce the element. If it's equal to i, push it into the array.
// Return the array after all the numbers have been iterated.