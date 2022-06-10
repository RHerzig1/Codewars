// In array "arr", check if integers "a" and "b" are consecutive elements. If so, return true. If not, return false.

function consecutive(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == a && arr[i + 1] == b) {
      return true
    }
    else if (arr[i] == a && arr[i - 1] == b) {
      return true
    }
  }
  return false
}

// An array and two integers.
// Return true if the integers are consecutive elements, or false if they are not.
// Create variable consecutive = false.
// Use a for loop to iterate through the loop.
// Inside the loop, create a conditional. If (arr[i] = a && arr[i + 1] = b), then reassign consecutive to true.
// Return consecutive.
