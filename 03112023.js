// Write an algorithm that converts an IPv4 address into a 32 bit number.

function ipToInt32(ip) {
  const binaryStr = String(ip)
    .split(".")
    .map((elem) => (elem >>> 0).toString(2).padStart(8, "0"))
    .join("");
  return parseInt(binaryStr, 2);
}

console.log( ipToInt32("128.32.10.1"), 2149583361);

// A valid IPv4 address string consisting of numbers and periods.
// Return the 32 bit number conversion of the input.

// Split the parameter into an array.
// For each element, calculate the binary form.
// Join into a string.
// Convert that string to 32 bit and return.
