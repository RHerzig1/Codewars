// Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.
// The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.

function mygcd(x,y){
  for (let i = x; i >= 0; i--) {
    if (x % i === 0 && y % i === 0) {
      return i
    }
    return 'There are no common divisors'
  }
}

mygcd(30, 24)

// Two positive integers.
// A single positive integer, thte greatest common divisor of both the parameters.
// (30, 24) -> 6
// Using an for loop, count backwards (starting from x or y down to 0), and test that i can divide both x and y (x % i === 0 && y % i === 0). The first result that can divide both will be the largest common divisor.

// https://www.codewars.com/kata/5500d54c2ebe0a8e8a0003fd/train/javascript