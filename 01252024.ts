// Write an algorithm that removes all occurances of an element from an array in place.

function removeElement(nums: number[], val: number): number {
  let left = 0;
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] !== val) {
      nums[left] = nums[right];
      left++;
    }
  }
  return left;
}

const arr1 = [1, 2, 3, 4];
console.log(removeElement(arr1, 4), 3);
console.log(arr1, [1, 2, 3, "_"]);

const arr2 = [1, 2, 3, 4];
console.log(removeElement(arr2, 1), 3);
console.log(arr2, [2, 3, 4, "_"]);

const arr3 = [0, 1, 2, 2, 3, 0, 4, 2];
console.log(removeElement(arr3, 2), 5);
console.log(arr3, [0, 1, 3, 0, 4, "_", "_", "_"]);

// arr: number[]. 0 <= arr.length <= 10. 0 <= number <= 100. Always valid integers and array.
// num: number. 0 <= number <= 100. Always a valid integer. Always within arr.
// Return the number of elements left in the array. The array should be modified in place so that the invalid elements are moved to the end. Don't resize.

// Use a two pointers technique.
