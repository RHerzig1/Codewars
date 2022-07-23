// Create an algorithm that splits rectangle into squares
// In a rectangle of lng x wdth, write an algorithm that reduces it to squares. Returning an array where each element represents the size of one side of the square.

function sqInRect(lng, wdth){
  if (lng === wdth) return null
  const result = []
  while (lng != wdth) {
    if (lng > wdth) {
      lng -= wdth
      result.push(wdth)
    }
    else if (wdth > lng) {
      wdth -= lng
      result.push(lng)
    }
  }
  result.push(lng)
  return result
}

// Parameters are lng x wdth, the dimensions of the rectangle.
// Return an array of integers containing the sizes of the squares. If lng and wdth are equal, return null.
// (5, 3) -> [3, 2, 1, 1]