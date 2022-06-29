// Reduce countering array elements.
// In an array of cardianal directions, check that there are 10 elements and the length = 0 when all countering directions are eliminated.

function isValidWalk(walk) {
  return walk.length == 10 ? countDuplicates(walk) : false
}

function countDuplicates(array) {
  let ns = 0, ew = 0;
  
  for (let elem of array) { 
    if (elem == 'n') ns += 1; 
    if (elem == 's') ns -= 1; 
    if (elem == 'e') ew += 1; 
    if (elem == 'w') ew -= 1; 
  }

  return ns == 0 && ew == 0
}