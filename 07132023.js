// Write a function that returns the missing length from an array of arrays.

function getLengthOfMissingArray(arrs) {
  if (!arrs || arrs.length === 0) {
    return 0;
  }

  let lengths = [];

  for (const arr of arrs) {
    if (!arr || arr.length === 0) {
      return 0;
    }
    lengths.push(arr.length);
  }

  lengths = lengths.sort((a, b) => a - b);

  const totalLength = (lengths[0] + lengths[lengths.length - 1]) * ((lengths.length + 1) / 2);
  const actualLength = lengths.reduce((a, c) => a + c, 0);
  return totalLength - actualLength;
}

console.log(getLengthOfMissingArray([ [ 1, 2 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]] ), 3);
console.log(getLengthOfMissingArray([ [ 5, 2, 9 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]] ), 2);
console.log(getLengthOfMissingArray([ [ null ], [ null, null, null ] ] ), 2);
console.log(getLengthOfMissingArray([ [ 'a', 'a', 'a' ], [ 'a', 'a' ], [ 'a', 'a', 'a', 'a' ], [ 'a' ], [ 'a', 'a', 'a', 'a', 'a', 'a' ]] ), 5);
console.log(getLengthOfMissingArray([ ]), 0);
console.log(getLengthOfMissingArray([ [ 5, 2, 9 ], [ 4, 5, 1, 1 ], [ ], [ 5, 6, 7, 8, 9 ]] ), 0);

// An array of arrays. Arrays may contain numbers, strings, or null. May be empty. Array lengths will be consecutive, except for one missing length.
// Return the missing length. If any of the arrays are empty, return 0.

// Declare a cache array.
// Iterate through the parameter and push each length into the cache.
// Calculate the total sum of the cache, if there weren't a missing length.
// Calculate the actual sum of the cache.
// Return the difference.