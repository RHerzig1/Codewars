// Add two elements to match target
// Provided an array of numbers and an integer, return the indices of two elements whose sum equals the integer.

function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length; i ++) {
    for (let j = 0; j < numbers.length; j++) {
      if (i != j) {
        if (numbers[i] + numbers[j] === target) {
          return [i, j]
        }
      }
    }
  }
  return null
}

// The parameters are an array of numbers, and a number.
// Return an array containing the indices of two elements from the array twhose sum equals the integer.
// Create a for loop to loop through the numbers array.
// Inside the loop, use another loop to iterate through the array.
// Add the both numbers. *Be sure not to add the same element twice*
// If the sum equals the target, return the indices as elements of an array.