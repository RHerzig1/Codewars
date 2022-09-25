// Create an array of specified length

function arr(N) {
  const array = []
  let count = 0
  while (array.length < N) {
    array.push(count)
    count++
  }
  return array
}

// The parameter is an integer.
// Return an array of the parameter's length, containing 0, 1, 2 etc elements.
// 5 -> [0, 1, 2, 3, 4]
// Declare an empty array.
// Declare a counting number starting at 0.
// Create a while loop.
// Until the length of the array is greater than the parameter, push the count.
// Every time the count is pushed, increment it by one.
// Return the array.