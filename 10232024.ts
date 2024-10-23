// Calculate the average mark.

function getAverage(marks){
  const average = marks.reduce((a, c) => a + c) / marks.length;
  return Math.floor(average);
}

// https://www.codewars.com/kata/563e320cee5dddcf77000158

// marks: number[]. 0 <= marks.length <= 100. 0 <= marks[i] <= 100.
// Return the average mark. Round down to the nearest integer.