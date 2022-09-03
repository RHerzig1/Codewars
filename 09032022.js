// Create a function containing 300 character or fewer that writes the lyrics to "Baby Shark"

function babySharkLyrics(){
  names = ["Baby shark", "Mommy shark", "Daddy shark", "Grandma shark", "Grandpa shark", "Let's go hunt"];
  return names.map((name)=> `${name},${" doo".repeat(6)}\n`.repeat(3) + `${name}!\n`).join("") + "Run away,…";
}

// There are no parameters included with this function.
// Return the lyrics to Baby Shark.
// Create an array containing all the characters.
// Map through the array.
// Repeat 'doo' 6 times.
// Repeat each line 3 imes.
// Add a 4th line containing just the character + '!'.
// At the end, add 'Run away,...'.
// Join and return the array.

// Baby shark, doo doo doo doo doo doo
// Baby shark, doo doo doo doo doo doo
// Baby shark, doo doo doo doo doo doo
// Baby shark!
// Mommy shark, doo doo doo doo doo doo
// Mommy shark, doo doo doo doo doo doo
// Mommy shark, doo doo doo doo doo doo
// Mommy shark!
// Daddy shark, doo doo doo doo doo doo
// Daddy shark, doo doo doo doo doo doo
// Daddy shark, doo doo doo doo doo doo
// Daddy shark!
// Grandma shark, doo doo doo doo doo doo
// Grandma shark, doo doo doo doo doo doo
// Grandma shark, doo doo doo doo doo doo
// Grandma shark!
// Grandpa shark, doo doo doo doo doo doo
// Grandpa shark, doo doo doo doo doo doo
// Grandpa shark, doo doo doo doo doo doo
// Grandpa shark!
// Let's go hunt, doo doo doo doo doo doo
// Let's go hunt, doo doo doo doo doo doo
// Let's go hunt, doo doo doo doo doo doo
// Let's go hunt!
// Run away,…