// Reformat a list of names.
// Provided a string of names, return another string that capitalizes each character, puts the names in ascending order, and changes their formats for readability.

function meeting(s) {
  s = s.split(';')
  s = s.map(elem => {
    elem = elem.toUpperCase().split(':').reverse()
    elem[0] = '(' + elem[0]
    elem[1] =  elem[1] + ')'
    return elem.join(', ')
  })
  return s.sort().join('')
}

// A string of names in this format: "First:Last;First:Last"
// Return the string in this format: "(LAST, FIRST)(LAST, FIRST)"
// Split the string into an array at the semi colon.
// Iteratet through the array, and make the following changes:
// Captialize every character.
// Split the element by the colon.
// Reverse the order of the names, so its LAST, FIRST.
// Add the paranthesis.
// Join names with ", ".
// After every element has been modified, sort the array in ascending order.
// Return the joined array.