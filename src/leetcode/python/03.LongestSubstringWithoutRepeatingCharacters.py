'''
Given a string s, find the length of the longest 
substring
 without repeating characters.


'''

class Solution:
    #Optimal sln Time Complexity O(n) Space Complexity O(n)
    def lengthOfLongestSubstring(self, s: str) -> int:
        #prefSum to track the length of longest substring
        longest = 0
        #hashMap to store elements in the string(non repeat)
        hashMap = {}
        #pointer initialized at the start of string
        start = 0

        for i in range(len(s)):

            char = s[i]
            #checks if the character is in the hashMap
            if char in hashMap:
                #if the character is present determine whether to move the pointer
                start = max(start, hashMap[char]+1)
            #adds the character and increments the length of substring by 1
            longest = max(longest, i-start+1)
            hashMap[char] = i
        return longest

s = Solution()
print(s.longestSubstring("abcabcbb")) #Output: 3
print(s.longestSubstring("bbbbb")) #Output: 1
print(s.longestSubstring("pwwkew")) #Output: 3