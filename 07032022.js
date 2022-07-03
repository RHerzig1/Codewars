// Detect Pangram
// Create a function that checks whether or not a string is a pangram (contains all letters a...z).

function isPangram(string){
  let abcArray = []
  string = string.toLowerCase()

  for (let i = 0; i < string.length; i++) {
    if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
      if (abcArray.includes(string[i]) == false) {
        abcArray.push(string[i])
      }
    }
  }

  return abcArray.length == 26 ? true : false
}

// The parameter is a string containing letters, possibly punctuation and numbers (ignore those).
// Return true if the parameter is a pangram, or false if it is not.
// "The quick brown fox jumps over the lazy dog" -> true
// Create an array.
// Convert the string to lowercase.
// Split the string into an array. Each letter is an element.
// Iterate through the array. For each element, IF it's a letter and IF it's not already included in the new declared array, then push it to the array. Else, move on.
// If the declared array has a length of 26, return true. Else return false.