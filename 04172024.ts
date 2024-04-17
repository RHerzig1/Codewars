// Write a function that returns the maximum subarray length containing the same element after changing k elements.

function maxConsecutiveAnswers(answerKey: string, k: number): number {
  const counts = new Map<string, number>();
  let maxLength = 0;
  let left = 0;
  let right = 0;

  while (right < answerKey.length) {
    // Cache the right pointer value.
    counts.set(answerKey[right], (counts.get(answerKey[right]) || 0) + 1);

    // If the window is too wide, remove left pointer from cache and increment.
    while (counts.get("T")! > k && counts.get("F")! > k) {
      counts.set(answerKey[left], (counts.get(answerKey[left]) || 1) - 1);
      left++;
    }

    // Cache maxLength.
    maxLength = Math.max(maxLength, right - left + 1);

    // Increment the right pointer.
    right++;
  }

  return maxLength;
}

console.log(maxConsecutiveAnswers("TTFF", 2), 4);
console.log(maxConsecutiveAnswers("TFFT", 1), 3);
console.log(maxConsecutiveAnswers("TTFTTFTT", 1), 5);

// answerKey: string. Consists of "T" and "F". 1 <= answerKey.length <= 5*10^4.
// k: number. Number of elements that can be replaced. 1 <= k <= answerKey.length.
// Return the length of the longest subArray possible after replacing k elements.

// Use the sliding window open.
// Use a Map to track counts of "T" and "F".
// Continude widening the window until there are k number of "T" or "F".
// Return the max length.
