// Count the minimum number of swaps to balance a string.

function minSwaps(s: string): number {
  let opens = 0;
  let swaps = 0;
  let left = 0;
  let right = s.length;

  // Use a double pointer algorithm.
  while (left < right) {
    if (s[left] === "[") {
      opens++;
      left++;
      continue;
    } else if (opens > 0) {
      opens--;
      left++;
      continue;
    }

    if (s[right] === "]") {
      right--;
      continue;
    }

    // Left is "]" and right is "[". Swap them and continue.
    swaps++;
    opens++;
    left++;
    right--;
  }

  return swaps;
}

console.log(minSwaps("][]["), 1); // "[[]]"
console.log(minSwaps("]]][[["), 2); // "[[][]]"
console.log(minSwaps("[]"), 0); // "[]"
console.log(minSwaps("[[[]]]][][]][[]]][[["), 2);

// https://leetcode.com/problems/minimum-number-of-swaps-to-make-the-string-balanced/

// s: string. 2 <= s.length <= 10^6. s.length is even. Consists of half "[" and half "]".
// Return the minimum number of swaps to balance the parameter.
