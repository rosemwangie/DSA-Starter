/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
typically using all the original letters exactly once.
Example:
Input: s = "rat", t = "tar"
Output: false 
*/

// O(n) T O(n) Space
const isAnagram = (s, t) => {
  if (s.length != t.length) return false;
  let charObj = {};
  for (char of s) {
    if (charObj[char]) {
      charObj[char]++;
    } else {
      charObj[char] = 1;
    }
  }
  for (char of t) {
    if (charObj[char]) {
      charObj[char]--;
    } else {
      return false;
    }
  }
  return true;
};

//tests
console.log(validAnagram1("anagram", "nagaram"));
console.log(validAnagram1("anagrm", "nagaram"));
console.log(validAnagram1("", "nagaram"));
console.log(validAnagram1("ab", "a"));
