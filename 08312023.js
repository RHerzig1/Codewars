// Write a function that validates coordinates.

function isValidCoordinates(coordinates) {
  if (/[A-Za-z]/.test(coordinates)) {
    return false;
  }

  const arr = coordinates.split(", ");

  if (arr.length !== 2) {
    return false;
  }

  if (arr.some((elem) => elem.includes(" "))) {
    return false;
  }

  if (arr.some((elem) => Number.isNaN(Number(elem)))) {
    return false;
  }

  if (arr[0] < -90 || arr[0] > 90) {
    return false;
  }

  if (arr[1] < -180 || arr[1] > 180) {
    return false;
  }

  return true;
}

console.log(isValidCoordinates("-23, 25"), true);
console.log(isValidCoordinates("24.53525235, 23.45235"), true);
console.log(isValidCoordinates("04, -23.234235"), true);
console.log(isValidCoordinates("43.91343345, 143"), true);
console.log(isValidCoordinates("4, -3"), true);
console.log(isValidCoordinates("23.234, - 23.4234"), false);
console.log(isValidCoordinates("2342.43536, 34.324236"), false);
console.log(isValidCoordinates("N23.43345, E32.6457"), false);

// A string containing coordinates. Always a valid string but may not be valid coordinates.
// Return true or false based on whether the coordinates are valid.

// Latitude must be between -90 and 90, excluding 0.
// Logitude must be between -180 and 180, excluding 0.
// The string may only contain numbers (positive or negative), and are seperated by a comma and space.
