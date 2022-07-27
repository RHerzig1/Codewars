// Create array using sums of elements
// Using an array of integers, find the sum of all the elements, Then, find the sum of all elements except the first element. Then the sum except the first and second elements. Etc.

function partsSums(ls) {
  let sum = ls.reduce((a, b) => a + b, 0)
  const results = []
  for (let i = 0; i <= ls.length; i++) {
    results.push(sum)
    sum -= ls[i]
  }
  return results
}


// The parameter is an array of integers.
// Return an array containing all the sums.
// [1, 2, 3, 4, 5, 6] -> [21, 20, 18, 15, 11, 6, 0]
// Reduce the element to find the total sum. Assign it to a variable.
// Declare a results array, and assign it an empty array.
// Iterate through the arrays. Starting with i = 1, and increasing incrementally for each array, multiply all numbers by i.
// Create a for loop that iterates ls.length times.
// Each iteration should push the sum to the results array, then subtract the value of ls[i].
// Return the results array.