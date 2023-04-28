// Write a series of functions that add, subtract, multiple, and divide numbers 0 - 9.

function zero(callback) {
  return callback ? callback(0) : 0;
}
function one(callback) {
  return callback ? callback(1) : 1;
}
function two(callback) {
  return callback ? callback(2) : 2;
}
function three(callback) {
  return callback ? callback(3) : 3;
}
function four(callback) {
  return callback ? callback(4) : 4;
}
function five(callback) {
  return callback ? callback(5) : 5;
}
function six(callback) {
  return callback ? callback(6) : 6;
}
function seven(callback) {
  return callback ? callback(7) : 7;
}
function eight(callback) {
  return callback ? callback(8) : 8;
}
function nine(callback) {
  return callback ? callback(9) : 9;
}

function plus(b) {
  return (a) => a + b;
}
function minus(b) {
  return (a) => a - b;
}
function times(b) {
  return (a) => a * b;
}
function dividedBy(b) {
  return (a) => Math.trunc(a / b);
}

console.log(seven(times(five())), 35)
console.log(four(plus(nine())), 13)
console.log(eight(minus(three())), 5)
console.log(six(dividedBy(two())), 3)

// A function and callback functions indicating the numbers and operand.
// Return the result of the equation.

// For numbers, if there is a callback then call it and pass in the number. Otherwise return just the number.
// For operands, return a function containing the operation. Pass in the previous number and next number as parameters.