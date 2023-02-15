// Write a function that takes a callback function and two arrays, and returns a new array using the callback.

function zipWith(fn,a0,a1) {
  const result = [];
  
  for (let i = 0; i < Math.min(a0.length, a1.length); i++) {
    result.push(fn(a0[i], a1[i]));
  }
  
  return result;
}

console.log(zipWith(Math.max, [1, 2, 3], [3, 2, 1]), [3, 2, 3])
console.log(zipWith(Math.pow, [1, 2, 3], [3, 2, 1]), [1, 4, 3])
console.log(zipWith((a, b) => a * b, [1, 2, 3], [3, 2, 1]), [3, 4, 3])
console.log(zipWith(Math.pow, [1, 2, 3, 4, 5], [3, 2, 1]), [1, 4, 3])

// A function that returns an integer, and two arrays. The arrays may not be the same length.
// Return a new array, the length of the shorter of the parameters, where the values are calculated using the callback function.

// Declare an empty results array.
// Loop through the arrays. For each iteration, call the callback on both elements and push the result to the results array.
// Return the results array.