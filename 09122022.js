// Filter elements from array

function gooseFilter (birds) {
  const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter(elem => geese.includes(elem) === false)
};

// The parameter is an array of strings.
// Return the array with all geese breeds removed. An array of geese is provided for reference.
// Filter the parameter.
// If the geese array does not contain the element, filter it.
// Return the new array.