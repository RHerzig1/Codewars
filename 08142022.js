// Return first pair of values that equal sum
// Use the provided array and integer to return the first pair of elements that sum equals the integer.

function sumPairs(ints, s) {
  const dup = {}
  for (let i = 0; i < ints.length; i++) {
    if (dup[s - ints[i]]) return [s - ints[i], ints[i]];
    dup[ints[i]] = true
  }
}

// The parameter is an array of positive and negative integers and a seperate integer indicating the total.
// Return an array containing the pair of integers.