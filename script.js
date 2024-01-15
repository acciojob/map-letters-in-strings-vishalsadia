//your JS code here. If required.
function mapLetters(word) {
  // Initialize an empty object to store the indexes
  const result = {};

  // Iterate through the characters in the word
  for (let i = 0; i < word.length; i++) {
    const letter = word[i];

    // If the letter is not a key in the result object, create an array for it
    if (!result[letter]) {
      result[letter] = [];
    }

    // Add the index to the array for the corresponding letter
    result[letter].push(i);
  }

  return result;
}

// Examples
console.log(mapLetters("dodo")); // Output: { d: [0, 2], o: [1, 3] }
console.log(mapLetters("froggy")); // Output: { f: [0], r: [1], o: [2], g: [3, 4], y: [5] }
console.log(mapLetters("grapes")); // Output: { g: [0], r: [1], a: [2], p: [3], e: [4], s: [5] }
