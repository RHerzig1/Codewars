// Write an algorithm that takes an integer and reverses it.

function reverseInt(num) {
  const arr = num.toString().split('')
  const result = parseFloat(arr.reverse().join(''))
  return result * Math.sign(num)
}

console.log(reverseInt(123), 321)
console.log(reverseInt(-123), -321)
console.log(reverseInt(100), 1)
console.log(reverseInt(1.23), 32.1)


// A positive or negative integer.
// Reverse the integer. Make sure the result remains positive or negative.

// Create a copy of the number and convert to array.
// Reverse array. Convert join and convert to number.
// Reapply original sign.
// Return result.