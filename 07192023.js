// Write a function that takes two IPv4 addresses and returns the number of addresses between them.

function ipsBetween(start, end) {
  const count = [16777216, 65536, 256, 1];
  const result = [];

  start = start.split(".").map(Number);
  end = end.split(".").map(Number);

  for (let i = 0; i < start.length; i++) {
    result.push(end[i] - start[i]);
    result[i] = result[i] * count[i];
  }

  return result.reduce((a, c) => a + c);
}

console.log(ipsBetween("10.0.0.0", "10.0.0.50"), 50);
console.log(ipsBetween("10.0.0.0", "10.0.1.0"), 256);
console.log(ipsBetween("20.0.0.10", "20.0.1.00"), 246);
console.log(ipsBetween("1.2.3.4", "5.6.7.8"), 67372036);
// 16777216 + 16777216 + 16777216 + 16777216 + 65536 + 65536 + 65536 + 65536 + 256 + 256 + 256 + 256 + 4
console.log(ipsBetween("1.2.3.4", "5.1.1.1"), 67042813);

// Two valid IP addresses as strings. The latter will always be greater than the former.
// Return the number of IP addresses between the two parameters. Count the start, exclude the end.
// The count for each segment: [16777216, 65536, 256, 1]

// Delcare a count array.
// Convert both parameters to arrays.
// Iterate through them and cache the differences.
// Iterate through the cache and multiple using the count array.
// Reduce the products and return the sum.
