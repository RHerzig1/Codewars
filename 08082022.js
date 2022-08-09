// Find most frequent integer in array
// In the provided array, return the most frequent integer. If it's a tie, return the tied integer with the highest value.

function highestRank(arr){
  let results = []
  let countHigh = 1
  let count = 1
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      count++
    }
    else if (count === countHigh) {
      results.push(arr[i])
      count = 1
    }
    else if (count > countHigh) {
      results = [arr[i]]
      countHigh = count
      count = 1
    }
    else {
      count = 1
    }
  }
  results = results.sort((a, b) => b - a, 0)
  return results[0]
}

  // Parameter is an array of integers.
  // Return the most frequent integer.
  // [1, 2, 3, 4, 4, 4, 5] -> 4
  // Declare a results variable equal to an empty array.
  // Declare a countHigh variable equal to 1.
  // Declare a count variable equal to 1.
  // Sort the parameter array.
  // Iterate through the parameter array.
  // If the next element equals the current element, add 1 to the count.
  // Else, if count is equal to countHigh, then push the element into the results array. Reset score to 1.
  // Else, if count is greater that countHigh, then remove all elements from the results array and push the current element. Set countHigh equal to count. Reset count to 1.
  // Return the highest element inside the results array.