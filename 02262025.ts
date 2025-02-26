// Write a function that returns true or false whether an array contains duplicate numbers.

function containsDuplicate(nums: number[]): boolean {
  const map: { [index: string]: number } = {};

  for (const num of nums) {
      map[num] = map[num] + 1 || 1;

      if (map[num] > 1) {
          return true;
      }
  }
  
  return false;
};

// nums: number[]. 1 <= nums.length <= 10^5. -109 <= nums[i] <= 109
// Return a boolean indicating whether any number appears at least twice.

// Use a hash map to count the occurance of each value.
