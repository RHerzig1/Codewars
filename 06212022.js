// Create a function that takes two arrays of integers, and removes all the integers from arraya that are in arrayb.

function arrayDiff(a, b) {
  return a.filter(element => b.includes(element) == false)
}

// Two arrays of integers.
// Return arraya, with integers from arrayb removed. Keep the order of the remaining elements the same.
// Filter arraya, testing if arrayb does not include the elem
// return arraya.