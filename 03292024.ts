// Write a function that returns the minimum number of recolors to get k consecutive black blocks.

function minimumRecolors(blocks: string, k: number): number {
  const charMap = new Map<string, number>();
  let left = 0;
  let right = 0;
  let minCount = blocks.length;

  while (right < blocks.length) {
    // Cache the right pointer value.
    charMap.set(blocks[right], (charMap.get(blocks[right]) || 0) + 1);

    // If window length === k, check the condition and increment left pointer.
    if (right - left + 1 === k) {
      // Check the condition.
      minCount = Math.min(minCount, charMap.get("W") || 0);

      // Increment the left pointer.
      charMap.set(blocks[left], (charMap.get(blocks[left]) || 1) - 1);
      left++;
    }

    // Increment the right pointer.
    right++;
  }

  return minCount;
}

console.log(minimumRecolors("WBBWWBBWBW", 7), 3) // "BBBBBBBWBW"
console.log(minimumRecolors("WBWBBBW", 2), 0) // "WBWBBBW"
console.log(minimumRecolors("BB", 1), 0); // "BB"
// https://leetcode.com/problems/minimum-recolors-to-get-k-consecutive-black-blocks/

// blocks: string. 1 <= blocks.length <= 100. blocks[i] === 'W' || 'B'.
// k: number. Width of consecutive blocks.
// Return the minimum number of blocks that need to be recolored in order to get k consecutive black blocks.

// Use the sliding window technique.
// Declare left and right pointers, and Map and minCount caches.
// Increase the window until it reaches a length of K.
// Count the number of "W" blocks in the window.
// Return the minimum count.
