// Write an algorithm that returns the even or odd outlier from an array of numbers.

function findOutlier(arr) {
  const cache = {
    even: [],
    odd: [],
  };

  for (const num of arr) {
    if (num % 2 === 0) cache.even.push(num);
    else cache.odd.push(num);
  }

  return cache.even.length < cache.odd.length ? cache.even[0] : cache.odd[0];
}

console.log(findOutlier([0, 1, 2]), 1);
console.log(findOutlier([1, 2, 3]), 2);
console.log(findOutlier([2, 6, 8, 10, 3]), 3);
console.log(findOutlier([0, 0, 3, 0, 0]), 3);
console.log(findOutlier([1, 1, 0, 1, 1]), 0);

// An array of numbers. All numbers are even, or all numbers are odd, except one outlier.
// Return the outlier number.

// Declare a caching object.
// Loop through the array and cache even or odd.
// Return the smaller cache value.
