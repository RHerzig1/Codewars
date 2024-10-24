// Count the number of unique array combinations.

function solve(arr) {
  // Remove duplicate elements from each subarray.
  const uniqueArr = arr.map((subarr) => subarr.filter((elem, index) => subarr.indexOf(elem) === index));
  
  // Multiply the length of each subarray to calculate the total number of unique combinations.
  let combinations = 1;
  uniqueArr.forEach((subarr) => combinations *= subarr.length);
  
  return combinations;
};

console.log(solve([[1,2],[4],[5,6]]),4);
console.log(solve([[1,2],[4,4],[5,6,6]]),4);
console.log(solve([[1,2],[3,4],[5,6]]),8);
console.log(solve([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]]),72);

// arr: number[][]. 1 <= arr.length <= 100. 1 <= arr[i].length <= 100. 1 <= arr[i][j] <= 100.
// Return the number of unique combinations that can be created using 1 element from each subarray.