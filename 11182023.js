// Write a function that sorts an array of rock climbing ranks.

function sortGrades(arr) {
  const ref = ["V0", "V0+", "V1", "V2", "V3", "V4", "V5", "V6", "V7", "V8", "V9", "V10", "V11", "V12", "V13", "V14", "V15", "V16", "V17"];
  return arr.sort((a, b) => ref.indexOf(a) - ref.indexOf(b));
}

console.log(sortGrades(["V13", "V14", "VB", "V0"]), ["VB", "V0", "V13", "V14"]);

// An array of rock climbing ranks. Length => 1. Always valid inputs.
// Sort the rank into this order.

// Declare the order.
// Reference that in the sort parameter.
