// Sort object properties as an array

function sortDict(dict) {
  let sortable = [];
  for (let property in dict) {
    sortable.push([(Number(property) || property), dict[property]]);
  }

  return sortable.sort(function(a, b) {
    return b[1] - a[1];
  });
}

// Parameter is an object containing strings and numbers.
// Return an array of key/value pairs, sorted in descending value order.
// Declare an empty array.
// Iterate through the object and push each key/value pair into the array.
// Sort each subarray.
// Return the result.