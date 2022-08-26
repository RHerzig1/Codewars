// Concatenate strings without overlapping
// Concatentate the two provided strings but remove as much overlap as possible.

function mergeStrings(first, second){
  for (let i = 0; i < first.length; i++) {
    if (first.slice(i) === second.slice(0, first.length - i)) {
      return first.slice(0, i) + second
    }
  }
  return first + second
}

// The parameters are both strings containing lower-case letters.
// Return a new string, containing both parameters concatenated with as little overlap as possible.
// ('abcd', 'cdef') -> 'abcdef'
// Create a for loop starting at 0, while i < first.length.
// Using slice(i), compare the end of first to the beginning of second.
// If a match is found, concatenate the partial strings and return the value.
// If no match is found, concatenate the full strings and return the value.