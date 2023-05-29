// Write a function that removes all odd numbers from an array.

function removeOddNums(arr){
  return arr.filter(num => num % 2 === 0);
}

console.log(removeOddNums([1, 2, 3, 4, 5]), [2, 4])

// A non-empty array of positive integers.
// Return the array with all odd numbers removed.

// Use the filter and modulus operator.