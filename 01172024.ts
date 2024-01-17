// Write a function that creates incrementing file names using several parameters.

export function nameFile(fmt: string, nbr: number, start: number): string[] {
  if (nbr % 1 !== 0 || start % 1 !== 0) {
    return [];
  }

  const files: string[] = [];

  for (let i = 0; i < nbr; i++) {
    const file: string = fmt.replace(/<index_no>/g, String(start + i));
    files.push(file);
  }

  return files;
}

console.log(nameFile('IMG <index_no>', 4, 1), ["IMG 1", "IMG 2", "IMG 3", "IMG 4"]);
console.log(nameFile('image #<index_no>.jpg', 3, 7), ["image #7.jpg", "image #8.jpg", "image #9.jpg"]);
console.log(nameFile('#<index_no> #<index_no>', 3, -2), ["#-2 #-2", "#-1 #-1", "#0 #0"]);
console.log(nameFile('file <index_no>', 0.2, 0), []);

// fmt: String representing the file name as a template. <index_no> represents the incrementing number of a file. Never empty, always valid.
// nbr: Number of files to generate. May be positive or negative. May not be an integer. Always a valid number.
// start: Starting index. May be positive or negative. May not be an integer. Always a valid number.
// Return an array of strings. Replace <index_no> with the index. If nbr or start are not positive integers, return [].

// Check that nbr and start are valid.
// Declare a cache string[].
// Generate the names using a for loop, and push into the cache.
// Return the cache array.