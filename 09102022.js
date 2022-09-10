// Remove elements from array that appear an odd number of times

function oddOnesOut(nums) {
  const counts = {}
  nums.forEach(elem => counts[elem] = (counts[elem] || 0) + 1)
 
  return nums.filter(elem => counts[elem] % 2 === 0)
}

// The parameter is an array of integers, several of which are repeating.
// Return the parameter array with the elements that appear an odd number of times removed. Preserve the order of the other elements.
// Declare a counts variable equal to an empty object.
// Iterate through the parameter array. Add each number to the object as a property. Add 1 to the value each time it appears.
// Filter nums using counts to determine whether the number appears an even or odd number of times.
// Return the filtered array.