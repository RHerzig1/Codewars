// Write an algorithm that returns the length of the longest palindrome possible using characters from a string.

function longestPalindrome(str) {
  const cache = {};
  for (const char of str) {
    cache[char] = cache[char] + 1 || 1;
  }

  let sum = 0;
  let single = false;
  for (const prop in cache) {
    if (cache[prop] % 2 === 0) sum += cache[prop];
    else {
      sum += cache[prop] - 1;
      single = true;
    }
  }
  if (single) sum += 1;

  return sum;
}

console.log(longestPalindrome('aabbccc'), 7);
console.log(longestPalindrome('aabb'), 4);
console.log(longestPalindrome('ccc'), 3);
console.log(longestPalindrome('abccc'), 3);
console.log(longestPalindrome('aabccc'), 5);
console.log(longestPalindrome('aabBccc'), 5);

// A string of uppercase and lowercase letters. This test is case-sensitive.
// Return an integer calculating the length of the longest palindrome possible using characters from the string.

// Create a cache and count the occurance of each char.
// Add all the even values and a single odd value.
// Return the sum.