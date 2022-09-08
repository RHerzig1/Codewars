// Program 'like' and 'dislike' buttons

function likeOrDislike(buttons) { 
  let state = 'Nothing'
  for (let i = 0; i < buttons.length; i++) {
    if (state === buttons[i]) state = 'Nothing'
    else state = buttons[i]
  }
  return state
}

// The parameter is an array containing at least one 'Like' or 'Dislike' elements.
// Return the final value, as a string: 'Like', 'Dislike', or 'Nothing'. The latter occurs when the same button is pressed twice in a row.
// ['Dislike'] -> 'Dislike'
// ['Dislike', 'Dislike'] -> 'Nothing'
// ['Dislike', 'Dislike', 'Like'] -> 'Like'
// Declare an state variable equal to 'Nothing'.
// Use a for loop to iterate through the buttons parameter.
// If state equals the current element, set the state to 'Nothing'.
// Else, set state to the current element.
// After iterating, return state.