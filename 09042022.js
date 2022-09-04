// Create string containing ascending and desending numbers of a certain length

function ascendDescend(length, minimum, maximum) {
  let result = ""
  for (let i = minimum; i < maximum; i++) {
    result += i
  }
  for (let j = maximum; j > minimum; j--) {
    result += j
    }
  if (minimum === maximum) result = minimum.toString();
  return result.repeat(length).slice(0, length);
}

// The three parameters are the total string length, and the minimum and maximum integers.
// Return a string of the specified length that containins integers within the specificied range.
// (11, 5, 9) -> "56789876567"