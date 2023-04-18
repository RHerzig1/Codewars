// Write a function that sorts digits of a number in decending order.

function descendingOrder(num) {
  return Number(
    String(num)
      .split("")
      .sort()
      .reverse()
      .join("")
  );
}

console.log(descendingOrder(123), 321)
console.log(descendingOrder(409), 940)
console.log(descendingOrder(135246), 654321)
console.log(descendingOrder(0), 0)

// A positive integer 0 or greater.
// Return a number containing the same digits but in decending order.

// Split the number into an array.
// Sort using a compare function.
// Join the array.
// Convert to a number and return.