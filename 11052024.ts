// Calculate the max X width between points.

function maxWidthOfVerticalArea(points: number[][]): number {
  const x = points.map((elem) => elem[0]).sort((a, b) => a - b);
  let maxWidth = 0;

  for (let i = 0; i < x.length - 1; i++) {
    const a = x[i];
    const b = x[i + 1];
    maxWidth = Math.max(maxWidth, Math.abs(a - b));
  }

  return maxWidth;
}

console.log(maxWidthOfVerticalArea([[8, 7], [9, 9], [7, 4], [9, 7]]), 1);
console.log(maxWidthOfVerticalArea([[3, 1], [9, 0], [1, 0], [1, 4], [5, 3], [8, 8]]), 3);
// https://leetcode.com/problems/widest-vertical-area-between-two-points-containing-no-points

// points: number[][]. 2 <= points.length <= 10^5. Points[i] == [x, y]. 0 <= x, y <= 10^9.
// Return the max X width between points regardless of Y value.
