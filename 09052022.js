// Identify the type of sandwich
// Count the number of slices of bread in a sandwich to return the name of the sandwich. In another function, take the name of the sandwich and return the number of slices.

function slicesToName(n) {
  if (typeof n !== "number" || n < 2) return null
  let name = "sandwich "
  name = name.repeat(Math.floor(n / 2))
  if (n % 2 === 1) name = "bread " + name
  return name.trim()
}

function nameToSlices(name) {
  if (typeof name !== "string") return null
  let count = 0
  let invalid = false
  name.split(' ').forEach((elem, index) => {
    if (elem === "bread" && index === 0) count += 1
    else if (elem === "sandwich") count += 2
    else invalid = true
  })
  if (invalid) return null
  return count >= 2 ? count : null
}


// The parameter is an integer indicating the number of slices of bread.
// Return a string containing the name of the sandwich. For every 2 slices of bread, concatenate "sandwich". If there are an odd number of slices, preface the string with "bread". If there are less than 2 slices of bread, return null.
// If the parameter is invalid or < 2, return null.
// Create a result variable equal to "sandwich ".
// Divide the parameter by 2 and round down. Use this calculation to repeat the string.
// If the parameter is odd, concatenate "bread" to the beginning of the string.
// Trim the string and return it.