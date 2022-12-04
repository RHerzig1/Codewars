// Remove letters from string based using array

function lastSurvivor(letters, coords) {
  let i = 0
  while (letters.length > 1) {
   letters = letters.slice(0, coords[i]) + letters.slice(coords[i] + 1)
   i++
 }
  return letters
}

// A string. Never empty. Casing and characters are irrelevant.
// An array of numbers. Always valid positive, whole numbers.
// Remove the character indicated by the array and return the remaining character.