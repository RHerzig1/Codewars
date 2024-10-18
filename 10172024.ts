// Chunk an array into segments of the specified size.

type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

function chunk(arr: Obj[], size: number): Obj[][] {
  const result: Obj[][] = [];
  let subArray: Obj[] = [];

  // Populate subArray. When its length becomes equal to size, push it into the result array and reset subArray.
  for (let i = 0; i < arr.length; i++) {
    const elem = arr[i];
    subArray.push(elem);

    if (subArray.length >= size) {
      result.push(subArray);
      subArray = [];
    }
  }

  // If subArray remains partially populated, push it into the result array.
  if (subArray.length > 0) {
    result.push(subArray);
  }

  return result;
}

// console.log(chunk([1, 2, 3, 4, 5], 1), [[1], [2], [3], [4], [5]]);
// console.log(chunk([1, 9, 6, 3, 2], 3), [[1, 9, 6], [3, 2]]);
// console.log(chunk([8, 5, 3, 2, 6], 6), [[8, 5, 3, 2, 6]]);
// console.log(chunk([], 1), []);
// https://leetcode.com/problems/chunk-array/

// arr: Obj[]. 2 <= JSON.stringify(arr).length <= 10^5. Valid JSON array.
// size: number. 1 <= size <= arr.length + 1.
// Return an array of arrays. Chunck the provided array into maximum length of size. The last array may be shorter.
