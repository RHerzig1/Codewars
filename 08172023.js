// Write a function that performs a lottery game by comparing a char codes to a number

function bingo(ticket, win){
  let count = 0;
  
  for (const [str, num] of ticket) {
    const char = String.fromCharCode(num);
    
    if (str.includes(char)) {
      count++
    }
  }
  
  return count >= win ? 'Winner!' : 'Loser!';
}

console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 2), 'Loser!');
console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 1), 'Winner!');
console.log(bingo([['HGTYRE', 74], ['BE', 66], ['JKTY', 74]], 3), 'Loser!');

// An array of arrays. Each nest array contains two elements, a string of capital letters and a number.
// An integer > 0 representing the minimum number of matches required.
// A string, either 'Winner!' or 'Loser!'. A ticket wins if the number of arrays where the integer matches a char code >= the second parameter.

// Declare a cache.
// Iterate through the nested arrays and count the wins. No more than 1 win per string.
// Update the cache for each win.
// Compare the cache to the parameter and return the appropriate string.
