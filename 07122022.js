// Find the largest largest length sum contiguous subarray
// In an array of strings, find the concatenation of k elements that produces the largest length sum.

function longestConsec(strarr, k) {
  const strarrLength = strarr.map(elem => elem.length)
  const maxIndex = maxSequence(strarrLength, k)
  const string = createString(strarr, maxIndex)
  return string
}
 
function maxSequence(strarrLength, k) {
  let maxSum = 0
  let maxIndex = []
  let sum = 0
  
  strarrLength.forEach((elem, index) => {
    sum = 0
    for (let i = 0; i < k; i++) {
      sum += strarrLength[index + i]
    }
    if (sum > maxSum) {
      maxSum = sum
      maxIndex = []
      for (let i = 0; i < k; i++) {
        maxIndex.push(index + i)
      }
    }
  })
  
  return maxIndex
}

function createString(strarr, maxIndex) {
  let string = ''
  
  maxIndex.forEach(elem => {
    string += strarr[elem]
  })
  
  return string
}

// Parameters are an array of strings and an integer.
// Return a string containing the concatentation of k elements. If k or strarr <= 0, return an empty string.
// Declare a new array that replaces elements from strarr with their lengths.
// Calculate the largest sum contiguous subarray, using k number of elements.
// Use those indexes to concatenate elements from the parameter strarr.
// Return the concatenation, or an empty string.