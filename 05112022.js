// Create a function which answers the question "Are you playing banjo?". If your name starts with the letter "R" or lower case "r", you are playing banjo! The function takes a name as its only argument, and returns one of the following strings:
// name + " plays banjo" 
// name + " does not play banjo"

function areYouPlayingBanjo(name) {
  if (name[0] === 'r' || name[0] === 'R') {
    return name + ' plays banjo'
  }
  return name + ' does not play banjo'
}

areYouPlayingBanjo("robin")

const areYouPlayingBanjo = name => name[0] === 'r' || name[0] === 'R' ? `${name} plays banjo` : `${name} does not play banjo`

// P: A string containing the name of a person.
// R: The name with a string concatentated to the end.
// E: "robin" -> "robin plays banjo"
// P: Take the string. If the first index === 'r' or 'R', then return 'name + plays banjo'. Else, return 'name does not play banjo'.

// https://www.codewars.com/kata/53af2b8861023f1d88000832/train/javascript