// Write a function that calculates the endpoints that can hold the most water.

function maxArea(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;
  let lastMove = "";

  while (left < right) {
    const area = Math.min(height[left], height[right]) * (right - left);
    maxArea = Math.max(maxArea, area);

    if (height[left] > height[right]) {
      right--;
      lastMove = "right";
    } else {
      left++;
      lastMove = "left";
    }
  }

  return maxArea;
}

console.log(maxArea([1,8,6,2,5,4,8,3,7]), 49);
console.log(maxArea([1, 1]), 1);

// height: number[]. Elements represents the height of each endpoint. 2 <= height.length <= 10^5. 0 <= height[i] <= 10^4. Unsorted. Always valid integers.
// Return an integer representing the maximum amount of water that can be held in the endpoints.

// Declare a left and right pointer.
// Declare a maxArea number equal 0.
// Whichever endpoint height is lower, move the pointer to the next endpoint.
// Calculate the area. Replace maxArea if the new value is larger.
// Once the pointers meet, return maxArea.
