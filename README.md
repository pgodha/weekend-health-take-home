# weekend-health-take-home
Weekend Health Take-home Challenge

findWords.ts is a typescript program, it first needs to be complied into JS file to get the output.
If `tsc` complier is already installed then use following command to compile, else install `tsc` compiler first
```
tsc --target es6 findWords.ts
```
Above command will generate js file which can be executed using node
```
node findWords.js
```

# Approach

1. Create a frequency map of each letter in inputString with key as a letter and value as frequency count.
2. Iterate over each word in dictonary, and check if this word can be formed[Step 3 to determine how word can be formed] using inputString frequncy map, if yes, then push in result array.
3. How to know word can be formed:- Iterate over each letter of word from dictionary, and look up into inputString frquency map(from step 1), if frequency is zero or letter is not present, then word can not be formed, else update map with frequncy count minus 1 for the letter and continue checking all the other letters in the word until all match.
4. Finally result array will have all the words from dictionary that can be formed.

**Complexity Analysis**

**Time Complexity**

if input string has length n and dictionary has total words m

Creating inputString frequncy map:- O(n)

Iterating over m words, and check each n letters in frequncy map:- O(m*n)

Final time complexity will be O(n + m*n).

**Space Complexity**

inputString frequncy map :- O(n)

Copy inputString frequncy map for each word in dictionary:- O(m)

Final space complexity will be O(m*n + n).
