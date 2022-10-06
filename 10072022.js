// Remove every nth character from string

function removeCharacters(message, integer) {
  message = [...message]
  const result = []
  for (let i = 0; i < message.length; i++) {
    if ((i + 1) % integer != 0) {
      result.push(message[i])
    }
  }
  return result.join('')
}

removeCharacters("The LBachyelor^ is ma tehrrib le tpelev!isioOn sh8ow.", 5)

// The parameters are a non-empty string containing letters, spaces, and numbers, and an integer.
// Return the string removing every nth character. Use the integer as n.
// Split the string.
// Iterate over it using a for loop.
// If the integer fits into i evenly, remove the element.
// After iterating, join the array.
// Return the final string.