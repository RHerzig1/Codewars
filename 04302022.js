// We need a simple function that determines if a plural is needed or not. It should take a number, and return true if a plural should be used with that number or false if not.

// const plural = n => n !== 1 ? true : false

// plural(sun)

const plural = n => n !== 1

// P: Take in a number.
// R: Return a boolean.
// E: 2  -> True
//    1  -> False
// P: Use a ternary operator that evaluates n !== 1. If true, return true. If false, return false.