// Write a fuction that returns all the keys and values of an object.

function keysAndValues(data) {
  const keys = Object.keys(data);
  const values = Object.values(data);
  return [keys, values];
}

const object = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};

console.log(keysAndValues(object), [
  ["key1", "key2", "key3"],
  ["value1", "value2", "value3"],
]);

// An object containing key/value pairs.
// Return an array containing an array of keys and an array of values. [[...keys], [...values]]