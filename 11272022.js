// Convert an array of numbers into a phone number

function createPhoneNumber(numbers){
  let format = "(xxx) xxx-xxxx"
  
  for (let number of numbers) {
    format = format.replace('x', number)
  }
  
  return format
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])) // (123) 456-7890

// The parameter is always an array containing single digit, whole, positive numbers. 0 - 9. Always a length of 10.
// Return a phone number string in the format of '(xxx) xxx-xxxx'

// Create a phone number template.
// Iterate through and replace each value with a value from the array.
// Return the completed phone number.