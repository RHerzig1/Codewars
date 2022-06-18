// Create a function that returns a "like" message, such as on social media.

function likes(names) {
  const numberOfNames = names.length

  if (numberOfNames == undefined) {
    return `no one likes this`
  }
  else if (numberOfNames == 1) {
    return `${names[0]} likes this`
  }
  else if (numberOfNames == 2) {
    return `${names[0]} and ${names[1]} like this`
  }
  else if (numberOfNames == 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`
  }
  else {
    return `${names[0]}, ${names[1]} and ${numberOfNames - 2} like this`
  }
}

// An array containing 0 to infinite names.
// Return a string containing the names (or a count of the names) provided by the array.
// []                                    -->  "no one likes this"
// ["Name1"]                             -->  "Name1 likes this"
// ["Name1", "Name2"]                    -->  "Name1 and Name2 like this"
// ["Name1", "Name2", "Name3"]           -->  "Name1, Name2 and Name3 like this"
// ["Name1", "Name2", "Name3", "Name4"]  -->  "Name1, Name2 and 2 others like this"
// Set numberOfNames = names.length
// Use conditionals to seperate the messages, and plug in the names where appropriate.
// Return the string.