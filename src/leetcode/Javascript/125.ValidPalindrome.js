/**
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward as backward.
 * Alphanumeric characters include letters and numbers.
 * Given a string s, return true if it is a palindrome, or false otherwise.
 */

// Solution 1
const validPalindrome = (string) => {
  /**
   * step 1. We'll lowercase the string & remove all non-alphanumeric characters
   *  step 2, Cretate a for loop that will iterate over the string
   *  step 3, For each iteration, check if the character at the beginning is the same as the character at the end of the string
   * If the characters are not the same, return false, because the string is not a valid palindrome
   * If the loop completes without returning false, then the string is a palindrome, hence
   * we return true
   */
  string = string.toLowerCase().replace(/[^a-z0-9]/g, "");
  //
  for (let i = 0; i < string.length / 2; i++) {
    let left = i;
    let right = str.length - 1 - i;
    if (str[left] !== str[right]) {
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


const items = document.querySelectorAll('.item');

items.sort((a, b) => {
  const numA = parseInt(a.querySelector('.item-name').innerText.match(/\d+/));
  const numB = parseInt(b.querySelector('.item-name').innerText.match(/\d+/));

  if (numA < numB) {
    return -1;
  } else if (numA > numB) {
    return 1;
  } else {
    return 0;
  }
});

items.forEach(item => item.parentNode.appendChild(item));
