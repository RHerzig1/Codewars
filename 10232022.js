// Increment concatenation of elements of array by 1

function upArray(arr){
  if (arr.some(elem => elem > 9 || elem < 0) || arr.length < 1) return null
  
  for (let i = arr.length - 1; i >= 0; i--) {
    arr[i] += 1
    if (arr[i] >= 10 && i === 0) {
      arr[i] = 0
      arr.unshift(1)
    }
    if (arr[i] >= 10) {
      arr[i] = 0
    }
    else break
  }

  return arr
}

// The parameter is an array of numbers. Each element is a whole number.
// If any of the elements are negative or greater than 9 then return null. If the parameter is empty, return null. Otherwise, return an array of elements 0 - 9 of the parameter +1.
// [1, 1, 1] -> [1, 1, 2]
// [1, 1, 9] -> [1, 2, 0]
// [1, 1, 10] -> null
// Return null if any of the elements are not between 0 - 9 or the parameter array is empty.
// Loop through the array backwards.
// Increment the last element +1.
// If it's now 10, set it equal to 0 and increment the element before it.
// Otherwise, break out of the loop.
// Return the incrimented array.