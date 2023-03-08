// Write an algorithm that checks a string for valid closures.

function validClosures(str) {
  const closures = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  const stack = [];

  for (const char of str) {
    if (char in closures) stack.push(char);
    else if (char !== closures[stack.pop()]) return false;
  }

  return stack.length === 0
}

console.log(validClosures("(){}[]"), true);
console.log(validClosures("([{}])"), true);
console.log(validClosures(")(}{]["), false);

// A string containing only open and closures in any order "(){}[]". Never empty.
// Return a Boolean indicating whether or not the closures are valid.

// Declare a closures object containing each closure pair.
// Declare a an empty stack array.
// Iterate through the string.
// If char is an open character, push it onto the stack.
// Else 