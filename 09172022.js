// Count the true Booleans in array

function countSheeps(arrayOfSheep) {
  return arrayOfSheep.filter(elem => elem === true).length
}

// The parameters are an array containing true or false Booleans.
// Return the count of true elements.
// [true, true, false] -> 2
// Use the filter() method on the parameter. Test that the element equals true.
// Return the length of the filtered array.