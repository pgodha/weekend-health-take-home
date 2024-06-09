function findWords(inputString: string, dictionary: string[]): string[] {
    // If either inputString or dictionary is empty then return []
    if (inputString.length === 0 || dictionary.length === 0) return []
    
    // Helper function to count the frequency of each letter in a string
    function countLetters(word: string): { [key: string]: number } {
        const count: { [key: string]: number } = {};
        for (const letter of word) {
            count[letter] = (count[letter] || 0) + 1;
        }
        return count;
    }

    // Step 1: Count the frequency of each letter in the input string
    const inputCount = countLetters(inputString);

    // Helper function to check if a word can be formed from inputCount
    function canFormWord(word: string): boolean {
        // If word length is greater than inputString length, return false
        if (word.length > inputString.length) return false

        // Make a copy of letter count map as we are modifying it later
        const inputLetterCountMap = { ...inputCount } 
        for (const letter of word) {
            // If letter is not found or frequency is already zero, return false
            if ((inputLetterCountMap[letter] || 0) === 0) {
                return false;
            }
            // Decrement letter frequency on match
            inputLetterCountMap[letter] = inputLetterCountMap[letter] - 1
        }
        return true;
    }

    // Step 2: Check each word in the dictionary
    const result: string[] = [];
    for (const word of dictionary) {
        if (canFormWord(word)) {
            result.push(word);
        }
    }

    return result;
}

// Example usage:

console.log(findWords("ate", ["ate", "eat", "tea", "dog", "do", "god", "goo", "go", "good"]));
// Expected output: ["ate", "eat", "tea"]

console.log(findWords("oogd", ["ate", "eat", "tea", "dog", "do", "god", "goo", "go", "good"]));
// Expected output: ["dog", "do", "god", "goo", "go", "good"]

// inputString is empty
console.log(findWords("", ["ate", "eat", "tea", "dog", "do", "god", "goo", "go", "good"]));
// Expected output: []

// dictioary is empty
console.log(findWords("ate", []));
// Expected output: []

// No words match from dictionary
console.log(findWords("sand", ["ate", "eat", "tea", "dog", "do", "god", "band"]));
// Expected output: []

// All words from dictionary match
console.log(findWords("oogd", ["dog", "do", "god", "goo", "go", "good"]));
// Expected output: ["dog", "do", "god", "goo", "go", "good"]

// Words with longer length
console.log(findWords("oogd", ["dog", "do", "god", "goo", "go", "good", "godcat", "eattea"]));
// Expected output: ["dog", "do", "god", "goo", "go", "good"]

// Really long dictionary
console.log(findWords("oogd", ["dog", "do", "god", "goo", "go", "good", "doog", "oogd", "oodg", "goog", "dood", "g", "d", "o", "oo", "godcat", "eattea", "ate", "eat", "tea"]));
// Expected output: ["dog",  "do", "god", "goo",  "go", "good", "doog", "oogd", "oodg", "g", "d", "o", "oo"]
