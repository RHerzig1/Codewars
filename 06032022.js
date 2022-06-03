// Use the formula to return the amount of water required for washing the clothes.

function howMuchWater(water, load, clothes) {
  if (clothes > load * 2) {
    return "Too much clothes";
  } else if (clothes < load) {
    return "Not enough clothes";
  } else {
    return Number(((water) * 1.1 ** (clothes-load)).toFixed(2));
  }
}

// 3 integers: amount of water, size of load, and number of clothes.
// If clothes is greater than x2 load, then return "Too much clothes"
// If clothes is less than load, return "Not enough clothes"
// Otherwise, return water * 1.1 ^ (clothes - load) with 2 decimal places.

// https://www.codewars.com/kata/575fa9afee048b293e000287