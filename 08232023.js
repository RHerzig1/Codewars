// Write a class with a method that can format a file name and extension to remove version numbers.

class FileNameExtractor {
  static extractFileName (fileName) {
      return fileName.slice(fileName.indexOf('_') + 1, fileName.lastIndexOf('.'));
  }
}

console.log(FileNameExtractor('1231231223123131_FILE_NAME.EXTENSION.OTHEREXTENSION'), 'FILE_NAME.EXTENSION')
console.log(FileNameExtractor('1_This_is_an_otherExample.mpg.OTHEREXTENSIONadasdassdassds34'), 'This_is_an_otherExample.mpg')
console.log(FileNameExtractor('1231231223123131_myFile.tar.gz2'), 'myFile.tar')

// A string representing the name of a file. Will contain upper and lower case letters and numbers. Words are seperated by an underscore and will always have an extension.
// Return a string by extracting the file name and extension from the parameter. See the examples.

// Use the slice() method.
// Remove the prefix by using indexOf('_').
// Remove the suffice by using lastIndexOf('.').
// Return the result.