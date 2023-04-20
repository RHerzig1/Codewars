// Write a function that returns whether a string is an isogram, or has no repeating letters.

function isIsogram(str){
  str = str.toUpperCase()
  const cache = {}
  
  for (const char of str) {
    if (cache[char]) {
      return false
    }
    cache[char] = true;
  }
  
  return true;
}

console.log(isIsogram('hi'), true)
console.log(isIsogram('hello'), false)
console.log(isIsogram('WoRlD'), true)
console.log(isIsogram('MoOsE'), false)

// A string containing uppercase and lowercase letters.
// Return true if there are no repeating letters. Else return false. Ignore casing.

// Set string to uppercase.
// Create a cache object.
// Iterate through the string. If the cache has the char, return false. Otherwise, add to object.
// After iterating, return true.