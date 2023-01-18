// Write an algorithm that determines whether a string of parenthesis is valid

function validParentheses(str) {
  let count = 0
  for (const letter of str) {
    if (letter === '(') count++
    else if (letter === ')') count--
    if (count < 0) return false
  }
  return count === 0
}

console.log(validParentheses('()'), true)
console.log(validParentheses(')('), false)
console.log(validParentheses('(('), false)
console.log(validParentheses('(())()'), true)

// A string containing open and close paranthesis. 0 <= input.length <= 100. Order of parenthesis varies.
// Return a Boolean indicating whether the parenthesis are valid.

// Declare a count variable equal to 0.
// Iterate through the string.
// Count the pairs of parenthesis.
// If the count falls below 0, return false.
// If the end count is 0, return true.