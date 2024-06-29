// Count the subsequences with length k that divide evenly into num.

function divisorSubstrings(num: number, k: number): number {
  const arr = String(num).split("");
  let subValue = "";
  let count = 0;
  let left = 0;
  let right = 0;

  while (right < arr.length) {
    // Cache the right pointer value.
    subValue = subValue + arr[right];

    // Check the condition.
    if (right - left + 1 === k) {
      // Check substring.
      if (num % Number(subValue) === 0) {
        count++;
      }

      // Increment the left pointer value.
      subValue = subValue.slice(1);
      left++;
    }

    // Increment right pointer.
    right++;
  }

  return count;
}

console.log(divisorSubstrings(240, 2), 2); // 240 % 24 === 0. 240 % 40 === 0.
console.log(divisorSubstrings(430043, 2), 2);
console.log(divisorSubstrings(430043, 1), 0);

// num: number. 1 <= num <= 10^9
// k: number. Target length. 1 <= k <= String(num).length.
// Return the count of subsequences with length k that divide evenly into num.

// Use a sliding window algorthm.
// Widening to k length.
// Iterate and check each window of numbers.
