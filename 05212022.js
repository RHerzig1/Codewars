// You will be given an array of objects (associative arrays in PHP, tables in COBOL) representing data about developers who have signed up to attend the next coding meetup that you are organising.
//Your task is to return either true if all developers in the list code in the same language; or false otherwise.

function isSameLanguage(list) {
  const languageCount = {}
  list.forEach(key => languageCount[key.language] = (languageCount[key.language] || 0) + 1)
  for (let key in languageCount) {
    if (languageCount[key] === list.length) {
      return true
    }
  }
  return false
}

function isSameLanguage(list) {
  return list.every(element => element.language === list[0].language);
}

// An array of objects. Each object has a "language" property.
// Boulean. True if the value of "language" identical in all objects, false if the value is not.
// Create languageCount variable.
// Using list.forEach, iterate through the objects. Add the language count property to equal either the language count value or 0, then + 1. Then, compare the value of the cumulated count to the length of the original array. If all objects in the array are the same language, then these numbers should be identical. If so, return true. Otherwise, return false.

// https://www.codewars.com/kata/58287977ef8d4451f90001a0