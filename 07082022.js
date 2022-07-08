// Build a pyramid-shaped tower
// Provided n number of floors, build a pyramid-shaped tower.

function towerBuilder(nFloors) {
  const array = []

  for (let i = 0; i < nFloors; i++) {
    let space = '' 
    for (let j = 1; j < nFloors - i; j++) {
      space += ' '
    }
    
    let tower = '*'
    for (let k = 0; k < i; k++) {
      tower += '**'
    }
    
    array.push(space + tower + space)
  }

  return array
}

function towerBuilder(nFloors) {
  const array = []
  let space = ' '
  let tower = '*'

  for (let i = 1; i <= nFloors; i++) {
    space = ' '.repeat(nFloors - i)
    tower = '*'.repeat((i * 2) - 1)
    array.push(space + tower + space)
  }
  
  return array
}

// The parameter is a positve integer.
// Return an array of *.
// Declare an empty array.
// Loop through the array nFloors times.
// First iteration, create an element containing '*'.
// For every subsequent iteration, concatenate '**'.
// Each iteration must include the spaces as well.
// Return the array.