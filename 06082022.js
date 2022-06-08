// Return the string without any whitespaces. If there are no white spaces, return "You just wanted my autograph didn't you?".

function ghostBusters(building) {
  const buildingArray = building.split('')

  if (buildingArray.includes(' ')) {
    return buildingArray.filter(element => element !== ' ').join('')
  }
  else {
    return "You just wanted my autograph didn't you?"
  }
}

// A string
// Return the string without any spaces between the letters. If there were no spaces to begin with, return "You just wanted my autograph didn't you?".
// "Fa c tory" -> "Factory"
// Split the string into an array so each element is a letter.
// Use the includes() method to check if the array contains a space. If not, return the quote.
// If so, use the filter() method to select each element of the array that is not a space, then join() them, and return.

// https://www.codewars.com/kata/5668e3800636a6cd6a000018