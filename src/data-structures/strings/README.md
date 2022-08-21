## To have in your back pocket
```
Clarify about input char set and case sensitivity
Usually the characters are limite to lowercase latin character, for example a-z
```
## Corner cases
1. Empty String
2. String with 1 or 2 elements
3. String with repeated characters 
4. Strings with only distinct characters

## Techniques
 ### Counting characters 
  > Often you're required to count the frequency of characters in a string
  > Common solution for that is using a hashmap
  > For the sake of keeping a counter of characters, a common mistakes is to say that the space complexity required for the counter is O(n)
  > The space required for a counter of a string of latin characters is O(1) not O(n)
 ### String of unique characters
  > Coolest trick to count characters in a string of unique chars is to use a 26-bit bitmask to indicate which lower case lation characters are inside the string
<details>
### Anagram 
 > This is a word switch
 > The result of re-arranging the letters of a word to produce a new word, while using all the original letters only once.  example: rat == tar

 #### Determin if two strings are anagrams 
 1. Sorting both strings should produce the same resulting string. O(nlogn)T O(logn) S
 2. Mapping each char to a prime number and we multiply each mapped number together anagrams should have the same multiple(prime factor decomposition) O(n) T O(1) S
 3. Frequency counting of characters will help determine if two strings are anagrams O(n) T O(1) S
</details>

### Palindrome
 This is a word, phrase, number or other sequence of characters which reads the same backwords as forward; example _madam_ or _racecar_
  #### Determine if two strings are anagrams 
  1. Reverse the string and it should be equal to itslef
  2. Havve pointers at the _start_ and _end_ of the string P1 & P2.
       ```
       move pointers inward till they meet
       ```
  ```
  At ever point in time, the characters at both pointers should match
  ```


  ## To Note
  ```
  > When a question is about counting the number of palindromes, a common trick is to have two pointers that move outward, away from the middle
  > For each middle pivot position, you need to check it twice-once that includes the characters and once without the character
  > For substrings, you can terminate early once there is no match 
  > For subsequences, use dynamic programming as there are overlapping subproblems
  ```