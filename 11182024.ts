// Count the k-beauty's of a number.

function divisorSubstrings(num: number, k: number): number {
  const str = String(num);
  let substring = "";
  let right = 0;
  let count = 0;

  // Window algorithm.
  while (right < str.length) {
    // Cache the right pointer value.
    substring = substring + str[right];

    // If the window length matches k, verify k-beauty and increment count.
    if (substring.length === k) {
      // Verify k-beauty.
      const value = Number(substring);

      if (num % value === 0) {
        count++;
      }

      // Increment left pointer value.
      substring = substring.slice(1);
    }

    // Increment the right pointer.
    right++;
  }

  return count;
}

console.log(divisorSubstrings(240, 2), 2);
console.log(divisorSubstrings(430043, 2), 2);
// https://leetcode.com/problems/find-the-k-beauty-of-a-number/

// num: number. 1 <= num <= 10^9.
// k: number. 1 <= k <= num.length.
// Return a count of k-beautys in num and k.
//   K-beauty is a substring of num.
//   K-beauty has a length of k.
//   K-beauty is a divisor of num.
