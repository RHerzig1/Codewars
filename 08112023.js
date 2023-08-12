// Write a function that deconstructs a string and counts the occurance of each character

function runLengthEncoding(str) {
  const result = [];
  let counter = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      counter++;
    } else {
      result.push([counter, str[i]]);
      counter = 1;
    }
  }

  return result;
}

console.log(runLengthEncoding("Habc"), [
  [1, "H"],
  [1, "a"],
  [1, "b"],
  [1, "c"],
]);
console.log(runLengthEncoding("Hello World!"), [
  [1, "H"],
  [1, "e"],
  [2, "l"],
  [1, "o"],
  [1, " "],
  [1, "W"],
  [1, "o"],
  [1, "r"],
  [1, "l"],
  [1, "d"],
  [1, "!"],
]);
console.log(runLengthEncoding("AABBBBAAABBAABABABABA"), [
  [2, "A"],
  [4, "B"],
  [3, "A"],
  [2, "B"],
  [2, "A"],
  [1, "B"],
  [1, "A"],
  [1, "B"],
  [1, "A"],
  [1, "B"],
  [1, "A"],
  [1, "B"],
  [1, "A"],
]);

// A string containing uppercase and lowercase letters.
// Return an array containing each character, in order, and a count of consecutive appearances.
