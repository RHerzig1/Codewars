// Write an algorithm that returns the largest rectangle from a histogram.

function largestRectangleArea(heights: number[]): number {
  const stack: number[][] = [];
  let maxArea: number = 0;

  for (let i = 0; i <= heights.length; i++) {
    while (stack.length > 0 && (i === heights.length || heights[i] < heights[stack[stack.length - 1][0]])) {
      const [prevIndex, prevHeight] = stack.pop()!;
      const width = stack.length === 0 ? i : i - stack[stack.length - 1][0] - 1;
      maxArea = Math.max(maxArea, prevHeight * width);
    }

    stack.push([i, heights[i]]);
  }

  return maxArea;
}

console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]), 10);
console.log(largestRectangleArea([2, 4]), 4)

// heights: number[]. Array of heights. Each width is assumed 1. 1 <= heights.length <= 10^5. 0 <= heights[i] <= 10^4.
// Return a number representing the area of the largest rectangle in the histogram.

// Declare a stack array for [index, height] pairs.
// Declare an areas array.

// https://leetcode.com/problems/largest-rectangle-in-histogram/
// https://www.youtube.com/watch?v=zx5Sw9130L0
