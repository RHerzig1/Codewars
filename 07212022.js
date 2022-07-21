// Convert string to Title Case, ignoring minor words
// Think of Title Case like a book title: the first letter of every word is capitalized except for minor words.

function titleCase(title, minorWords) {
  title = title.toLowerCase().split(' ')
  minorWords = minorWords || ''
  minorWords = minorWords.toLowerCase().split(' ')
  title = title.map((elem, index) => {
    if (index === 0) {
      let letter = elem.slice(0, 1).toUpperCase()
      let word = elem.slice(1) 
      return letter + word
    }
    if (!minorWords.includes(elem)) {
      let letter = elem.slice(0, 1).toUpperCase()
      let word = elem.slice(1)
      return letter + word
    }
    else return elem
  })
  return title.join(' ')
}

// Parameters are the title, a string, and a list of minor words, another string.
// Return the title as a string in title case.
// ('hello to the world', 'to the') -> 'Hello to the World'
// Make title all lower case characters.
// Split title into an array.
// Split minorWords into an array.
// Iterate through title.
// If the element is not included in minorWords, then capitalize the first letter.
// Join the array and return it.