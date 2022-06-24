// Count reoccuring characters and integers

function duplicateCount(text){
  let duplicateCount = 0
  text = text.toLowerCase()
  text = text.split('')

  text.forEach(elem => {
    if (text.indexOf(elem) != text.lastIndexOf(elem)) {
      text = text.filter(match => elem != match)
      duplicateCount++
    }
  })
  return duplicateCount
}

// A string containing only characters or integers.
// Return a count of the characters(case insensitive) and integers that appear more than once.
// Create a counter.
// Split the lower case string into an array.
// If an element appears more than once, remove those elements and increment the count++.
// Return the count.