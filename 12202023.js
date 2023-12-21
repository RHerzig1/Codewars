// Write a function that adds a new property to each object of an array.

function addProperty(arr) {
  for (const obj of arr) {
    obj.age = 30;
  }

  return arr;
}

console.log(addProperty([{user: 'Jim'}, {user: 'Bob'}]), [{user: 'Jim', age: 30}, {user: 'Bob', age: 30}])

// An array of objects. Length > 0. Always valid.
// Create a function that iterates through the array and adds a new property to each object.