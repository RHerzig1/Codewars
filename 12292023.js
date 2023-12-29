// Write a function that replaces a number with a padded string.

function solution(num) {
  const result = "00000" + String(num);
  return `Value is ${result.slice(result.length - 5)}`;
}

console.log(solution(5),"Value is 00005")
console.log(solution(1204),"Value is 01204")
console.log(solution(109),"Value is 00109")
console.log(solution(0),"Value is 00000")

// An integer. 0 <= integer <- 99999. Always a valid, positive number.
// Return a string 'Value is ' + the integer at 5 digits. Leftpad zeros as necessary (e.g. 10 => 00010).