// Count the smiley faces in array
// A proper smiley face will have eyes ; or : and a mouth ) or D. It may or may not have a nose - or ~.

function countSmileys(arr) {
  arr = arr.filter(elem => elem.length <= 3)
  arr = arr.filter(elem => elem.includes(';') || elem.includes(':'))
  arr = arr.filter(elem => elem.includes(')') || elem.includes('D'))
  arr = arr.filter(elem => elem.includes('~') || elem.includes('-') || elem.length == 2)
  return arr.length
}

// The parameter is an array of symbols.
// Identify and return a count of valid smileys in parameter.
// Iterate through each element.
// If an element contains any of the eyes and any of the mouths, filter it. Then count the result.
// Return the count.