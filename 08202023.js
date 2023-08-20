// Write a function that reduces consecutive numbers of an array.

function sumConsecutives(arr) {
  const result = [];
  let sum = 0;
  
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
    
    if (arr[i] === arr[i + 1]) {
      continue;
    }
    
    result.push(sum);
    sum = 0;
  }
  
  return result;
}

console.log(sumConsecutives([1,1,7,7,3]), [2,14,3]);
console.log(sumConsecutives([-5,-5,7,7,12,0]), [-10,14,12,0]);
console.log(sumConsecutives([1,4,4,4,0,4,3,3,1]), [1,12,0,4,6,1]);

// An array of positive or negative integers. Always a valid number.
// Return the array with all the consecutive, identical numbers reduced to a single sum.

// Declare a result array.
// Declare a cache to hold the sum.
// Iterate through the parameter array.
// Reduce the consecutive elements and push each to the result array.
// Return the result.