// Write a function that takes a number and transforms it into a palindrome.

function makePalindrome(num, count = 0) {
  const numReverse = Number(String(num).split("").reverse().join(""));

  if (num === numReverse) {
    return count;
  }

  num += numReverse;
  count++;
  return makePalindrome(num, count);
}

console.log(makePalindrome(87), 4);
console.log(makePalindrome(88), 0);
console.log(makePalindrome(89), 24);

// A positive integer. Always a valid number. 0 < num <= 10000.
// Return the number of steps it takes to transform the parameter into a palindrome. The transformation is to reverse the number and then add it to itself.

// Use recursion.
// Base Case:
// If palindrome, return the number of steps.
// Recursive Case:
// Add the resverse number to num.
// Increase the count.
