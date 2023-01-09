'''
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 '''
class Solution:
    #Optimal sln using hashMap Time Complexity O(n) Space complexity O(n)
    def isAnagram(self, s: str, t:str) -> bool:
        #compare the length of the strings
        if len(s) != len(t):
            return False
        #hashMap to store the characters in the string
        sMap = {}
        tMap = {}

        #loop through the s string and check if the values are in the sMap
        for char in s:
            if char in sMap:
                sMap[char] +=1
            else:
                sMap[char] = 1
        
        #loop through the t string and check if the values are in the tMap
        for char in t:
            if char in tMap:
                tMap[char] +=1
            else:
                tMap[char] = 1
        
        #loop through the sMap
        for char in sMap:
            #return False is the values in sMap are not in tMap
            if char not in tMap or sMap[char] != tMap[char]:
                return False
        
        #return True if no return yet because they must be anagrams
        return True

s = Solution()
print(s.isAnagram("anagram", "nagaram"))    #True
print(s.isAnagram("rat", "car"))    #False
