// Return largest and smallest values from array

function highAndLow(numbers){
  numbers = numbers.split(' ').sort((a, b) => a - b)
  return `${numbers[numbers.length - 1]} ${numbers[0]}`
}

// The parameters is an array of number(s) seperated by a space.
// Return a string in the format of '<largest value> <smallest value>'.
// '4, 1, 3, 5, 6' -> '6 1'
// Split numbers into an array and sort from smallest to largest.
// Return a string containing the largest number and smallest number.