// Write a function that sorts an array of strings while ignoring case.

const sortCaseInsens = (arr) => arr.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: "base" }));

console.log(sortCaseInsens(["Hello","there","I'm","fine"]), ["fine", "Hello", "I'm", "there"]);
console.log(sortCaseInsens(["C", "d", "a", "B"]), ["a", "B", "C", "d"]);
console.log(sortCaseInsens(['Hello', 'World', 'hello', 'world']), ['Hello', 'World', 'hello', 'world']);
console.log(sortCaseInsens(["CodeWars"]), ["CodeWars"]);
console.log(sortCaseInsens([]), []);

// An array of strings. Length >= 2. Always valid string containing uppercase and lowercase characters. No punctuation or numbers.
// Return the sorted array.

// Use sort and localeCompare.