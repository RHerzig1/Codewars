// Find irregular integer from extremely large array
// Provided an array of integers, return the element of the integer that does not match the others. The arrays may be very large, so pay attention to performance.

function findUniq(arr) {
  arr = arr.sort((a, b) => a + b)
  return arr[0] != arr[1] ? arr[0] : arr.at(-1)
}

function findUniq(arr) {
  return arr.find(number => arr.indexOf(number) === arr.lastIndexOf(number));
}

// The parameter is an array of positve integers.
// Return the element that does not match the others
// [4, 4, 2, 4, 4, 4, 4] -> 2
// Sort the array.
// If arr[0] == arr[1], return arr.at(-1). Else return arr[0].