/**
 * @param {string} s
 * @return {boolean}
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward as backward.
 * Alphanumeric characters include letters and numbers.
 * Given a string s, return true if it is a palindrome, or false otherwise.
 */

// Solution 1
const validPalindrome = (string) => {
  string = string.toLowerCase().replace(/[^a-z0-9]/g, "");
  //
  for (let i = 0; i < string.length / 2; i++) {
    let left = i;
    let right = string.length - 1 - i;
    if (string[left] !== string[right]) {
      return false;
    }
  }
  return true;
};

//Solution 2
const isPalindrome = (string) => {
  let left = 0;
  let right = string.length - 1;
  while (left < right) {
    const isLeftAlpha = isAlphaNumeric(string[left]);
    const isRightAlpha = isAlphaNumeric(string[right]);

    if (!isLeftAlpha) {
      left++;
    } else if (!isRightAlpha) {
      right--;
    } else if (string[left].toLowerCase() !== string[right].toLowerCase()) {
      return false;
    } else {
      left++;
      right--;
    }
  }
  return true;
};

const isAlphaNumeric = (string) => {
  const code = string.toLowerCase().charCodeAt(0);
  return (
    (code > 96 && code < 123) ||
    (code > 64 && code < 91) ||
    (code > 47 && code < 58)
  );
};

console.log(isPalindrome("A man, a plan, a canal: Panama")); //Output: true
console.log(isPalindrome("race a car")); //Output: false
console.log(isPalindrome(" ")); //Output: true
