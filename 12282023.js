// Write a function that returns a nickname for the provided name.

function nicknameGenerator(name){
  if (name.length <= 3) {
    return 'Error: Name too short'
  }
  const three = name.slice(0, 3);
  const four = name.slice(0, 4);
  
  return [...'aeiou'].includes(name[2]) ? four : three;
}

console.log(nicknameGenerator('Samual'), 'Sam');
console.log(nicknameGenerator('Jeanie'), 'Jean');
console.log(nicknameGenerator('Ed'), 'Error: Name too short');
console.log(nicknameGenerator(''), 'Error: Name too short');

// A string containing a name. Always uppercase first letter with all other characters lowercase. 0 <= name.length <= 20;
// Return a new string containing the nickname.
