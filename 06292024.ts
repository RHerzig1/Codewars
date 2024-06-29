function minimumRecolors(blocks: string, k: number): number {
  let minCount = blocks.length;
  let currCount = 0;
  let left = 0;
  let right = 0;

  while (right < blocks.length) {
    // Cache the right pointer value.
    if (blocks[right] === "W") {
      currCount++;
    }

    // If window length === k, count 'W' blocks and increment left pointer.
    if (right - left + 1 === k) {
      minCount = Math.min(minCount, currCount);

      if (blocks[left] === "W") {
        currCount--;
      }

      left++;
    }

    // Increment the right pointer.
    right++;
  }

  return minCount;
}

console.log(minimumRecolors("WBBWWBBWBW", 7), 3);
console.log(minimumRecolors("WBWBBBW", 2), 0);
console.log(minimumRecolors("WBWBWBW", 2), 1);
// https://leetcode.com/problems/minimum-recolors-to-get-k-consecutive-black-blocks/

// blocks: string. Blocks[i] === 'W' || 'B'.
// k: number. The target number of consecutive black blocks.
// Return a lowest count of 'W' blocks that need to convert to 'B', if the subarray has a length of 'K'.

// Use a sliding window algorithm.
// Expand the window until it's k length.
// Iterate the window and track the minimum number of 'W' blocks.
