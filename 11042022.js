// Return the longest common prefix from an array of strings

function longestCommonPrefix(strs) {
  let result = ''
  for (let i = 0; i < strs[0].length; i++) {
      let char = strs[0][i]
      for (let j = 1; j < strs.length; j++) {
          if (strs[j][i] != char) return result
      }
      result += char
  }
  return result
};

// An array of strings. Length at least 1. All lowercase.
// Return a string containing the longest common prefix letters.
// Declare a result string.
// Loop through each letter.
// Loop through each word.
// If the letter isn't consistent, return the result.