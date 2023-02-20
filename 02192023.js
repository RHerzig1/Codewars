// Write a function that returns the index of the matching parenthesis in a string.

String.prototype.findParenMatch = function(pos) {
  let count = 0
  
  for (let i = pos; i >= 0 && i < this.length; this[pos] === '(' ? i++ : i--) {
    if (this[pos] === '(') {
      if (this[i] === '(') count++
      else if (this[i] === ')') count--
    }
    else if (this[pos] === ')') {
      if (this[i] === ')') count++
      else if (this[i] === '(') count--
    }
    if (count === 0) return i
  }
  
  return -1
};

console.log(')((()))('.findParenMatch(0), -1)
console.log(')((()))('.findParenMatch(1), 6)
console.log(')((()))('.findParenMatch(2), 5)

// A string of opening and closing parenthesis. Never empty. An integer indicating the index of the paranthesis to find a valid match.
// Return the index of the valid match or -1, if a match doesn't exist.

// Declare a count variable equal to 1.
// Iterate through the string.
// Count up if a matching parenthesis is found, count down if the opposite parenthesis is found.
// When count equals 0, return i.
// Else, return -1.