// Count asterisks not between pairs.

function countAsterisks(s: string): number {
  const arr = s.split("|");
  let total = 0;

  for (let i = 0; i < arr.length; i += 2) {
      const elem = arr[i];
      const regex = /\*/g;
      const asterisks = elem.match(regex);
      total += asterisks ? asterisks.length : 0;
  }

  return total;
};