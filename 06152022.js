// Create a function that reduces an array of directions ('north', 'east', 'south', 'west') by eliminating opposite instructions.

function dirReduc(arr){
  const directionArray = ['NORTH', 'EAST', 'SOUTH', 'WEST']
  
  for (let i = 0; i < arr.length; i++) { 
    let directionIndex = directionArray.findIndex(elem => elem == arr[i])

    if (!arr[i + 1]) {
      break
    }
    else if (arr[i + 1] == directionArray[directionIndex + 2] || arr[i + 1] == directionArray[directionIndex - 2]) {
      arr.splice(i, 2)
      i = -1
    }    
  }
  
 return arr
}

// An array containing directions.
// Remove all opposite concurrent directions and return that array.
// (['north', 'south', 'west']) -> ['west']
// Create an array containing each direction in order.
// Use a for loop to iterate through the parameter arr.length number of times.
// Each iteration must remove redundant directions.
// Match elem to the corrent direction array elemenent.
// If elem[i + 1] == directionArray[i + 2] || elem[i + 1] == directionArray[i - 2], then remove it from the array.