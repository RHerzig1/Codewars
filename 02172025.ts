// Find the musical note of a frequency.

function getNote(pitch: number): string | undefined {
  const notesDictionary: Record<number, string> = {
    440: "A",
    466.16: "A#",
    493.88: "B",
    523.25: "C",
    554.37: "C#",
    587.33: "D",
    622.25: "D#",
    659.25: "E",
    698.46: "F",
    739.99: "F#",
    783.99: "G",
    830.61: "G#",
  };

  for (const hzStr in notesDictionary) {
    const hz = parseFloat(hzStr); // Convert key string to number

    if (pitch % hz === 0 || hz % pitch === 0) {
      return notesDictionary[hz]!;
    }
  }

  return undefined;
}

console.log(getNote(440), "A");
console.log(getNote(220), "A");
console.log(getNote(880), "A");
console.log(getNote(523.25), "C");
console.log(getNote(261.625), "C");
console.log(getNote(1046.5), "C");

// pitch: number. 0 <= pitch <= 1046.5. Always a valid note pitch.
// Return the note by normalizing the octave.
