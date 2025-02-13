// Join the nth letter of every word.

function nthChar(words): string {
  const result: string[] = [];

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    result.push(word[i]);
  }

  return result.join("");
}