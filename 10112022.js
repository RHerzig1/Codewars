// Reorganize array while maintaining element relative order

function organizeArray(array) {
  const results = []
  array.filter(elem => elem.includes('a')).forEach(elem => results.push(elem))
  array.filter(elem => elem.length <= 3 && !results.includes(elem)).forEach(elem => results.push(elem))
  array.filter(elem => !results.includes(elem)).forEach(elem => results.push(elem))
  
  return results
}

organizeArray(['hi', 'hello', 'howdy', 'hola', 'hej', 'hallo', 'heyyy'])

// The parameter is an array containing unique elements.
// Return an array after making the following changes: Move any containing the letter 'a' to the front. Move any remaining entries that have > 3 characters to the back. Preserve the relative order of entries that share a condition.
// ['hi', 'hello', 'howdy', 'hola', 'hej', 'hallo', 'heyyy'] -> ['hola', 'hallo', 'hi', 'hej', 'hello', 'howdy', 'heyyy']
// Declare an empty results array.
// Filter the parameter array. If the element contains an 'a', push it to results.
// Filter the parameter array. If the element has 3 or fewer characters AND is not already in the results array, push it to results.
// Filter the parameter array. If the element is not already inside results, push it to results.
// Return results.