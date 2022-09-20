// Remove first and last characters of string.

function array(arr) {
  return arr.split(",").slice(1, -1).join(" ") || null;
}

// The parameter is a string of numbers separated by commas. Length is > 0.
// Return the middle numbers, as a string, separated by spaces. If there are 2 numbers or fewer, return null.
// "1,2,3,4,5" -> "2 3 4"
// Split the string so each number is an element of an array.
// If the length of the array is less than 3, return null.
// Splice the middle elements.
// Join using a space.
// Return the new string.