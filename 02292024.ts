// Write a function that calculates the total amount of water stored in an elevation map.

function trap(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let leftMax = height[left];
  let rightMax = height[right];
  let total = 0;

  while (left < right) {
    if (leftMax < rightMax) {
      left++;
      leftMax = Math.max(leftMax, height[left]);
      total += leftMax - height[left];
    } else {
      right--;
      rightMax = Math.max(rightMax, height[right]);
      total += rightMax - height[right];
    }
  }

  return total;
}

console.log(trap([0, 1, 0, 2, 0, 0, 0, 3, 2, 0, 2, 1]), 9);
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]), 6);
console.log(trap([4, 2, 0, 3, 2, 5]), 9);

// height: number[]. Integers representing the height of each section. 1 <= height.length <= 2 * 10^4. 0 <= height[i] <= 10^5. Always valid.
// Return a number representing the total amount of water that can be held within the elevation map.

// https://www.youtube.com/watch?v=ZI2z5pq0TqA&t=1396s
