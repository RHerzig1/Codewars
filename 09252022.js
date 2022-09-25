// Create an array using min element, max element, and difference between age the two.

function differenceInAges(ages) {
  ages = ages.sort((a, b) => a - b)
  return [ages[0], ages[ages.length - 1], ages[ages.length - 1] - ages[0]]
}

// The parameter is an array of whole integers in any order.
// Return an array containing the max age, min age, and the difference between the two.
// [30, 66, 12, 81, 20] -> [20, 81, 61]
// Sort the parameter.
// Return an array containing the first element, last element, and the difference between the two.