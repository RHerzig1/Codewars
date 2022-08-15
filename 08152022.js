// Create a mirror strand of DNA
// Take the provided string of DNA and return the complimentary side by replacing the letters.

function DNAStrand(dna){
  const nucleotide = ['A', 'T', 'G', 'C']
  const nucleotideComp = ['T', 'A', 'C', 'G']
  dna = [...dna].map((elem, index) => {
    let compIndex = nucleotide.findIndex(elem2 => elem2 === elem)
    return nucleotideComp[compIndex]
  })
  return dna.join('')
}

// The parameter is a string containing A, T, G, and/or C.
// Return the string by swapping As and Ts, and Gs and Cs.
// "ATTGC" -> "TAACG"
// Create a nucleotide array with a value of ['A', 'T', 'G', 'C'].
// Create a nucleotideComp array with a value of ['T', 'A', 'C', 'G'].
// Split dna into an array.
// For each element, find the match in the nucleotide, then use that index to replace it with the element from nucleotideComp.
// Join and return the array.