/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
Given a string s, return true if it is a palindrome, or false otherwise.
*/
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

console.log(isPalindrome("A man, a plan, a canal: Panama")); //true
console.log(isPalindrome("race a car")); //false
console.log(isPalindrome(" ")); //true
