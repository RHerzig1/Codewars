// You can print your name on a billboard ad. Find out how much it will cost you. Each letter has a default price of £30, but that can be different if you are given 2 parameters instead of 1.

// The multiply operator is not allowed.

function billboard(name, price = 30){
  return Math.imul(name.length, price)
}

// 2 parameters: a string and an integer.
// Return an integer.
// ('Steve', 20) -> 100
// Return the product of name.length and price.

// https://www.codewars.com/kata/570e8ec4127ad143660001fd