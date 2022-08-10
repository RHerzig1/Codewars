// Prefill arrays without looping
// Write a function that returns an array with n elements all containing a value of v.

function prefill(n, v) {
  if (typeof n === 'boolean' || n < 0 || n % 1 !== 0) throw new TypeError(`${n} is invalid`)
  return Array.from({length: n}).fill(v || undefined)
}

// Parameter n is the number of elements, and v is a string or integer.
// Return an array.
// (3, 1) -> [1, 1, 1]
// (3, 'abc') -> ['abc', 'abc', 'abc']
// (3) -> [undefined, undefined, undefined]
// (0, 'abc') -> []
// ('abc', 3) -> 'abc is invalid'
// In the parameters, set v to equal undefined by default.
// If n is not a number, throw an error.
// Create an array of n length, then fill it.
// Return the array.