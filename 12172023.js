// Write a function that rotates a number and returns the maximum outcome.

function maxRot(num) {
  let str = String(num);
  const nums = [num];
  let count = 0;

  while (count < str.length) {
    const a = str.slice(0, count);
    let b = str.slice(count);
    b = b.slice(1) + b[0];

    str = a + b;
    nums.push(Number(str));
    count++;
  }

  return Math.max(...nums);
}

console.log(maxRot(38458215) === 85821534);
console.log(maxRot(195881031) === 988103115);
console.log(maxRot(896219342) === 962193428);
console.log(maxRot(69418307) === 94183076);

// An integer > 0. Always a valid number.
// Return the maximum outcome after rotating the number. After each rotation, the leftmost number is frozen.
// Ex: 12345 -> 23451, 23451 -> 24513, 24513 -> 24135, 24135 -> 24153.

// Declare an array to cache the results.
// Declare a count variable.
// Use a while loop to iterate through.