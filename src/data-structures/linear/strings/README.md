# Strings
Strings are arrays/sequence/stream of characters and they are immutable.
Strings are allocated one byte per character in memory

## **Types**

* Single quote string ```jsx const message = 'Goodmorning'```
* Double QUote string  ```jsx const message = "Hello" ```
* Template Literals ```jsx const name = `Rose`  ```

They are used to represent text and are represented by enclosing text or characters with quote as: 
  ```jsx
  //string primitive
  const str = "abcd"
  const message = "hello";

  // String object
  const greetings = new String("hello")

  ```

### Accessing a String Char
  ```jsx
  const greetings = "Hello";
  greetings.charAt(5)
  //o
  ```
 
 ### String Methods
 
 1. **indexOf()** - check if a section exists in a string, if the section doesn't exists, it returns -1
  ```jsx 
   const text = 'singletext' 
   single.indexOf('gle') // returns 3 (position) 
   ```
 2. **toUpperCase()** - converts str to uppercase
   ```jsx 
   const text = 'singletext' 
   single.toUpperCase()
   ```
  3. **toLowerCase()** - converts str to lower case
   ```jsx 
   const text = 'singletext' 
   single.toLowerCase()
   ```
  4. **substring()**  - fetches a section of the string
   ```jsx 
   const text = 'singletext' 
   single.substring(2, 6) //
   ```
   5. **includes()**  - returns true or false if the section of the string exists
   ```jsx 
   const text = 'singletext' 
   single.includes('text') // true
   ```
   6. **charAt()**  - accesses a string position
   ```jsx 
   const text = 'singletext' 
   single.charAt(4) // l
   ```
   7. **slice()**  - extracts a string position
   ```jsx 
   const text = 'singletext' 
   single.slice(2, 5) // ngle
   ```
   8. **splice()**  - replaces a section
   ```jsx 
   const text = 'singletext' 
   single.splice(3, "o") // sinoletext
   ```
   9. **split()**  - separates characters
   ```jsx 
   const text = 'singletext' 
   single.split('') // s i n g l e t e x t
   ```


## Asymptotic Analysis 
| Access | Lookup | Insert(at) | Deletion At |
|:------:|:------:|:----------:|:-----------:|
|  O(1)  |  O(n)  |    O(n)    |     O(n)    |

## To have in your back pocket
* Clarify about input char set and case sensitivity
* Usually the characters are limite to lowercase latin character, for example a-z

## Constraints
1. Empty String
2. String with 1 or 2 elements
3. String with repeated characters 
4. Strings with only distinct characters

## Techniques
 ### Counting characters 
  * This involves counting the frequency of characters in a string
  * Common solution for that is using a hashmap
  * For the sake of keeping a counter of characters, a common mistakes is to say that the space complexity required for the counter is O(n)
  * The space required for a counter of a string of latin characters is O(1) not O(n)
  
 ### String of unique characters
  Coolest trick to count characters in a string of unique chars is to use a 26-bit bitmask to indicate which lower case lation characters are inside the string

### Anagram 
  * This is a word switch
  * The result of re-arranging the letters of a word to produce a new word, while using all the original letters only once.  example: rat == tar, Earth == heart

 #### Determine if two strings are anagrams 
 1. Sorting both strings should produce the same resulting string. O(nlogn)T O(logn) S
 2. Mapping each char to a prime number and we multiply each mapped number together anagrams should have the same multiple(prime factor decomposition) O(n) T O(1) S
 3. Frequency counting of characters will help determine if two strings are anagrams O(n) T O(1) S


### Palindrome
 This is a word, phrase, number or other sequence of characters which reads the same backwords as forward; example _madam_ or _racecar_
  #### Determine if two strings are anagrams 
  1. Reverse the string and it should be equal to itslef
  2. Have pointers at the _start_ and _end_ of the string P1 & P2.
  
   ```
    move pointers inward till they meet
   ```
   ```
     At ever point in time, the characters at both pointers should match
   ```


  ## To Note
  * When a question is about counting the number of palindromes, a common trick is to have two pointers that move outward, away from the middle
  * For each middle pivot position, you need to check it twice-once that includes the characters and once without the character
  * For substrings, you can terminate early once there is no match 
  * For subsequences, use dynamic programming as there are overlapping subproblems

  ## Check below leetcode questions (to enhance understanding)
  1. [Longest Repeating Character Replacement](https://leetcode.com/problems/longest-repeating-character-replacement/) [solution in JavaScript](https://github.com/rosemwangie/Data-structure-JS-and-Psuedo/blob/main/src/leetcode/1.TwoSum.js)
  2. [Find All Anagrams in a String](https://leetcode.com/problems/find-all-anagrams-in-a-string/) 
  3. [Group Anagrams](https://leetcode.com/problems/group-anagrams/)
  4. [Valid Palindrome](https://leetcode.com/problems/valid-palindrome/) [see solution](https://github.com/rosemwangie/Data-structure-Interview-prep-JS/blob/main/src/leetcode/125.ValidPalindrome.js)
  5. [Longest Palindromic Substring](https://leetcode.com/problems/longest-palindromic-substring/)
