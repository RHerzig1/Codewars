// Write a function that performs a single iteration of a bubble sort.

function bubblesortOnce(arr) {
  const result = [];
  let pointerA = null;
  let pointerB = null;
    
  for (let i = 0; i < arr.length; i++) {
    if (pointerA === null) {
      pointerA = arr[i]
    }
    
    if (pointerB === null) {
      pointerB = arr[i + 1]
    }
    
    if (pointerB === undefined){
      result.push(pointerA);
    }
    else if (pointerA <= pointerB) {
      result.push(pointerA);
      pointerA = pointerB;
      pointerB = null;
    }
    else {
      result.push(pointerB)
      pointerB = null
    }
  }
  
  return result;
}

console.log(bubblesortOnce([9, 7, 5, 3, 1, 2, 4, 6, 8]), [7, 5, 3, 1, 2, 4, 6, 8, 9]);
console.log(bubblesortOnce([1, 2, 3]), [1, 2, 3]);
console.log(bubblesortOnce([1, 2, 3, 3]), [1, 2, 3, 3]);
console.log(bubblesortOnce([1, 2, 2, 3]), [1, 2, 2, 3]);

// An array of numbers. Length > 0. Always valid numbers/integers. Sorted in any order. Numbers are not unique.
// Return the array after a single iteration of bubblesort has been performed. The largest number should appear at the end of the array.

// Declare two pointers, a and b.
// Iterate through the array and compare two numbers. Push the smaller number into a result array and null the pointer.
// Whichever pointer is null will take the next number.