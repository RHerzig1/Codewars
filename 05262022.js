// Create a function that takes an array of letters, and combines them into words in a sentence.
// Your task is to return an array where each object will have a new property 'greeting' with the following string value: Hi < firstName here >, what do you like the most about < language here >?

function greetDevelopers(list) {
  list.forEach(array => array.greeting = `Hi ${array.firstName}, what do you like the most about ${array.language}?`)
  return list
}


// An object of arrays.
// An array containing strings.
// Use the forEach() method to iterate through the array.
// Inside each object, create a new property called greetings. Have it equal = `Hi ${array.firstName}, what do you like the most about ${array.language}?`
// Return the list.

// https://www.codewars.com/kata/58279e13c983ca4a2a00002a