// Return the max number of satisfied customers.

function maxSatisfied(customers: number[], grumpy: number[], minutes: number): number {
  let currSatisfiedMinutes = 0; // Temp count using minutes
  let maxSatisfiedMinutes = 0; // Running max using minutes
  let runningSatisified = 0; // Running total where owner is not grumpy
  let left = 0;
  let right = 0;

  while (right < customers.length) {
    // Cache the right pointer value
    if (minutes[right] === 1) {
      currSatisfiedMinutes += customers[right];
    } else {
      runningSatisified += customers[right];
    }

    if (right - left + 1 === minutes) {
      // Cache the max satisfied using minutes
      maxSatisfiedMinutes = Math.max(maxSatisfiedMinutes, currSatisfiedMinutes);

      // Decache and increment left pointer
      if (minutes[left] === 1) {
        currSatisfiedMinutes -= customers[left];
      }

      left++;
    }

    // Increment the right pointer
    right++;
  }

  return runningSatisified + maxSatisfiedMinutes;
}

console.log(maxSatisfied([1, 0, 1, 2, 1, 1, 7, 5], [0, 1, 0, 1, 0, 1, 0, 1], 3), 16);
// https://leetcode.com/problems/grumpy-bookstore-owner

// customers: number[]. minutes <= n <= 2*10^4. 0 <= customers[i] <= 1000.
// grumpy: number[]. minutes <= n <= 2*10^4. grumpy[i] is either 0 or 1. 1 = grumpy.
// minutes: number. 1 <= minutes <= n.
// Return the max number of satisfied customers.
//   Customers are only satisfied if they enter when the owner is not grumpy.
//   The owner can  also make themselves not grumpy for minutes consecutive minutes. Optimize for the most satisfied customers.
