// Write a function that returns the distance between two points.

function distanceBetweenPoints(a, b) {
  const x = b.x - a.x;
  const y = b.y - a.y;
  const z = x ** 2 + y ** 2;
  return Math.sqrt(z);
}

console.log(distanceBetweenPoints({ x: 3, y: 3 }, { x: 3, y: 3 }), 0);
console.log(distanceBetweenPoints({ x: 1, y: 6 }, { x: 4, y: 2 }), 5);
console.log(distanceBetweenPoints({ x: 2, y: 3 }, { x: -3, y: 1 }), 5.385164807134504);

// Two objects, each containing an x and y coordinate and value. Values are always a valid number and integer, and may be positive or negative.
// Return the distance between the two points.

// Use the Pythagorean theorem.