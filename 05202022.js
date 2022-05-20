// You will be given an array of objects (associative arrays in PHP, table in COBOL) representing data about developers who have signed up to attend the next coding meetup that you are organising.
// Your task is to return an object (associative array in PHP, table in COBOL) which includes the count of each coding language represented at the meetup.

function countLanguages(list) {
  const languageCount = {}
  for (let key of list) {
    if (languageCount.hasOwnProperty(key.language)) {
      languageCount[key.language] += 1
    }
    else {
      languageCount[key.language] = 1
    }
  }
  return languageCount
}

function countLanguages(list) {
  const languageCount = {}
  list.forEach(key => languageCount[key.language] = (languageCount[key.language] || 0) + 1)
  return languageCount
}

// An array of objects. Each object has a "language" property.
// Return an object containing the count of each language in the meetup.
// Create a new array "languageCount".
// Use a for...of loop to iterate through "list".
// Inside the loop, add the language value to "languageCount" with a value of 1.
// If the language is already inside "languageCount", add 1 to the value.
// Return languageCount

// https://www.codewars.com/kata/5828713ed04efde70e000346