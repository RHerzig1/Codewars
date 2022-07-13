// Write integer in expanded form
// Provide an integer, convert it to a string that expresses that number in expanded form.

function expandedForm(num) {
  num = num.toString()
  let result = []

  for (let i = 0; i < num.length; i++) {
    if (num[i] != 0) {
      result.push(num[i] + '0'.repeat(num.length - i - 1))
    }
  }

  return result.join(' + ')
}

// Parameter is a positive, whole number.
// Return a string that expands the number.
// 20061 -> '20000 + 60 + 1'
// Convert num to a string.
// Declare an empty array.
// In a for loop, iterate through the num string.
// If the number is not zero, push it to the array. Repeat zeros based off the length of the num string.
// Join the array with ' + '.
// Return the string.