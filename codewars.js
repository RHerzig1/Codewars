// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.
// Return the average of the given array rounded down to its nearest integer.
// The array will never be empty.

const getAverage = marks => Math.floor(marks.reduce((a,b) => a + b, 0)/marks.length)

// P: Array of numbers.
// R: Return a number, the average of each number of the array, rounded down to the nearest integer.
// E: [1,2,3,4,5] => 3
// P: Take array, add each number, divide by length, round to floor, return integer.