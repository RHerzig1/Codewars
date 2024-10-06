// Queries on a permutation with key.

function processQueries(queries: number[], m: number): number[] {
  const permutations = [...Array(m).keys()].map((elem) => elem + 1);
  const result: number[] = [];

  for (const num of queries) {
    const index = permutations.indexOf(num);
    result.push(index);

    permutations.splice(index, 1);
    permutations.unshift(num);
  }

  return result;
}

console.log(processQueries([3, 1, 2, 1], 5), [2, 1, 2, 1]);
console.log(processQueries([4, 1, 2, 2], 4), [3, 1, 2, 0]);
console.log(processQueries([7, 5, 5, 8, 3], 8), [6, 5, 0, 7, 5]);
// https://leetcode.com/problems/queries-on-a-permutation-with-key/

// queries: number[]. 1 <= queries.length <= m. 1 <= queries[i] <= m.
// m: number. 1 <= m <= 10^3.
// Return the results array after performing the following operations:
//   Declare permutations = [1, ..., m];
//   Declare a results array.
//   Loop through queries.
//     For each value, map to permutations. Push the index of the value into result.
//     Move the value to the beginning of permutations.
//   Return result.
