// Write a function returns whether there are two matching elements of an array within a distance of k.

function containsNearbyDuplicate(nums: number[], k: number): boolean {
  let numMap = new Map<number, number>();
  let left = 0;
  let right = 0;

  while (right < nums.length) {
    // Add the right pointer value to the map.
    numMap.set(nums[right], (numMap.get(nums[right]) || 0) + 1);

    // If the window reaches the maximum size, increment the left pointer.
    if (right - left - 1 >= k) {
      numMap.set(nums[left], (numMap.get(nums[left]) || 1) - 1);
      left++;
    }

    // Check the condition.
    if (numMap.get(nums[right])! >= 2) {
      return true;
    }

    // Increment the right pointer.
    right++;
  }

  return false;
}

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3), true); // 3 - 0  - 1 === 3
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1), true);
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2), false);

// nums: number[]. 1 <= nums.length <= 10^5. -10^9 <= nums[i] <= 10^9.
// k: number. Maximum distance between the two elements. 0 <= k <= nums.length.
// Return a Boolean indicating whether there are at least two elements with the same value within distance k.

// Use the sliding window technique.
