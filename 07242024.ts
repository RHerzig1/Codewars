// Return the next greatest letter of an array and target.

function nextGreatestLetter(letters: string[], target: string): string {
  // Delcare a left and right pointer.
  let left = 0;
  let right = letters.length - 1;

  // Use a binary search algorithm.
  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (letters[middle] <= target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return letters[left] || letters[0];
}

console.log(nextGreatestLetter(["c", "f", "j"], "a"), "c");
console.log(nextGreatestLetter(["a", "a", "c", "c", "f", "j"], "c"), "f");
console.log(nextGreatestLetter(["x", "x", "y", "y"], "z"), "x");

// letters: string[]. 2 <= letters.length <= 10^4. letters[i] is a lowercase English letter.
// target: string. Lowercase English letter.
// Return the next greatest letter, or the first letter of the array if none exists.
