// Write a function that converts a hash into a string.

function stringifyObject(obj) {
  const pairs = [];

  for (const key in obj) {
    pairs.push(`${key} = ${obj[key]}`);
  }

  return pairs.join(", ");
}

console.log(stringifyObject({ a: 1, b: 2, c: 3 }), "a = 1, b = 2, c = 3");

// An object containing key/value pairs. Always valid.
// Return a string of all the key/value pairs in the object. Use the format "key = value, key = value..."

// Delcare an array to store the strings.
// Iterate through the object and create the strings.
// Join and return the final string.