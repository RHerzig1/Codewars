// Sort by with custom callback function.

type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Fn = (value: JSONValue) => number;

function sortBy(arr: JSONValue[], fn: Fn): JSONValue[] {
  return arr.sort((a, b) => fn(a) - fn(b));
}

// https://leetcode.com/problems/sort-by/

// arr: JSONValue[] (JSON array). 1 <= arr.length <= 5 * 10^5.
// fn: function that returns a number.
// Use the provided fn function to sort the provided arr array.
