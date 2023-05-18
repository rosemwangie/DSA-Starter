/**
 * @param {string} s
 * @return {boolean}
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward as backward.
 * Alphanumeric characters include letters and numbers.
 * Given a string s, return true if it is a palindrome, or false otherwise.
 */

// solution 
const validPalindrome = (string) => {
   //split - reverse - join
  let reverseString = string.split('').reverse().join()
  if (reverseString === string) {
    return true
  } else {
    return false 
  }
}

console.log(validPalindrome("A man, a plan, a canal: Panama")); //Output: true
console.log(validPalindrome("race a car")); //Output: false
console.log(validPalindrome(" ")); //Output: true
