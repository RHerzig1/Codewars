// Calculate the max Y width between points on the same X value.

function maxWidthOfVerticalArea(points: number[][]): number {
  const pointsMap = new Map<number, number[]>();
  let maxWidth = 0;

  // Group all points based on horizontal position.
  for (const [horizontal, vertical] of points) {
      pointsMap.set(horizontal, (pointsMap.get(horizontal) || []).concat(vertical));
  }

  // Calculate the width within each point group.
  for (const [horizontal, verticals] of pointsMap) {
      if (verticals.length <= 1) {
          continue;
      }

      for (let i = 0; i < verticals.length - 1; i++) {
          const a = verticals[i];
          const b = verticals[i + 1];
          maxWidth = Math.max(maxWidth, Math.abs(a - b) - 1);
      }
  }

  return maxWidth;
};

console.log(maxWidthOfVerticalArea([[8, 7], [9, 9], [7, 4], [9, 7]]), 1);
console.log(maxWidthOfVerticalArea([[3, 1], [9, 0], [1, 0], [1, 4], [5, 3], [8, 8]]), 3);

// points: number[][]. 2 <= points.length <= 10^5. Points[i] == [x, y]. 0 <= x, y <= 10^9.
// Return the max Y width between points on the same X value.