// Write a function that returns the k-beauty of a number using the sliding window technique.

function divisorSubstrings(num: number, k: number): number {
  let str = String(num);
  let subStr = "";
  let right = 0;
  let left = 0;
  let count = 0;

  while (right < str.length) {
    // Cache the right pointer value.
    subStr = subStr + str[right];

    // If the width is correct, continue with the count and left pointer.
    if (right - left + 1 === k) {
      // Check the condition. If valid, increment count.
      const subNum = Number(subStr);
      const isDivisor = num % subNum === 0;

      if (isDivisor) {
        count++;
      }

      // Increment the left pointer.
      subStr = subStr.slice(1);
      left++;
    }

    // Increment the right pointer.
    right++;
  }

  return count;
}

console.log(divisorSubstrings(240, 2), 2); // 24, 40 = 2
console.log(divisorSubstrings(430043, 2), 2); // 43, 43 = 2

// num: number. 1 <= num <= 10^9.
// k: number. 1 <= k <= num.length.
// Return the k-beauty of a number. This is the number of substrings of num, with a length of k, that is a divisor of num.
// 0 is not considered a divisor.

// Use a sliding window technique.
