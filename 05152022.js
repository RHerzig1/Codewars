// Write a generic function chainer that takes a starting value, and an array of functions to execute on it (array of symbols for Ruby). The input for each function is the output of the previous function (except the first function, which takes the starting value as its input). Return the final value after execution is complete.

function chain(input, fs) {
  
  for(elem of fs) {
    input = elem(input)
  }
   
  return input
}

// An integer, and an array of strings. Each element will be a mathimatical operation to perform on the integer, by order of index.
// A single integer.
// chain(2, [add, mult]) -> 90
// Using a for...of loop, create a function for each iteration using the element(input). Track the value by reassigning it and then return that variable.

// https://www.codewars.com/kata/54fb853b2c8785dd5e000957/train/javascript