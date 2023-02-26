// Write an algorithm that splits a string into an array with elements of two characters.

function solution(str) {
  const arr = [];
  for (let i = 0; i < str.length; i += 2) {
    let subStr = str.slice(i, i + 2);
    if (subStr.length === 1) subStr = subStr + "_";
    arr.push(subStr);
  }
  return arr;
}

console.log(solution("hello"), ["he", "ll", "o_"]);
console.log(solution("worlds"), ["wo", "rl", "ds"]);

// Take a string. Not empty. Lowercase characters only.
// Return an array of strings, where each string consists of two characters. If there are an odd number of characters, supplement the last character with "_".

// Declare an empty array.
// Loop through the string. Iterate by 2.
// Slice two characters and push them to the array.
// If there is only one character, concatenate "_".
// Return the array.
