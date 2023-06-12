// Write a function that can add extemely large integers without BigInt.

function findSum(a, b) {
  [a, b] = [[...a].reverse().join(""), [...b].reverse().join("")];
  let result = "";
  let carryover = false;

  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    const [aNum, bNum] = [a[i] || 0, b[i] || 0].map(Number);
    let sum = aNum + bNum + carryover;
    carryover = sum >= 10;
    result = `${sum % 10}${result}`;
  }

  return carryover ? `${1}${result}` : result;
}

console.log(findSum('100000000000000', '100000000000000'), '200000000000000')
console.log(findSum('100000000000000', '123'), '100000000000123')

// Two strings of numbers. No invalid characters, empty strings, or leading 0s.
// Return a string representing the sum of the two parameters.

// Declare a Boolean for any carryover.
// Iterate through the strings.
