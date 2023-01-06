// Use recursion to reduce the digits of a number until it calculates a single digit sum

// function digitalRoot(n) {
//   while (n >= 10) {
//     n = Array.from(String(n)).map(Number)
//     n = n.reduce((a, c) => a + c, 0)
//   }

//   return n
// }

function digitalRoot(n) {
  if (n < 10) {
    return n
  }

  n = Array.from(String(n)).map(Number)
  n = n.reduce((a, c) => a + c, 0)
  return digitalRoot(n)
}

console.log(digitalRoot(1), 1)
console.log(digitalRoot(16), 7)
console.log(digitalRoot(942), 6)
console.log(digitalRoot(493193), 2)

// A whole number. Always positive. 0 or greater.
// Return a single digit number that is the result of repeatly adding each digit to each other.

// Split number into an array
// Inside a while loop, reduce until add digits add to a sum with a length of 1.
// Return the sum