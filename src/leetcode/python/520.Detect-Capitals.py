'''
We define the usage of capitals in a word to be right when one of the following cases holds:

All letters in this word are capitals, like "USA".
All letters in this word are not capitals, like "leetcode".
Only the first letter in this word is capital, like "Google".
Given a string word, return true if the usage of capitals in it is right.
'''

class Solution:
    #Brute/Naive approach -> Time Complexity O(n) Spce Complexity O(1)
    def detectCapitalUse(self, word:str) -> bool:
        left = 0
        right = len(word) -1

        while left <= right:
            if word[left].isupper() and word[1:right].islower():
                return True
            elif word[:].isupper or word[:].islower():
                return True
            else:
                return False

    #Optimal solution -> Time complexity O(1) Space Complexity O(1)
    def detectCapitalUse1(self, word:str) -> bool:
        if word.isupper() or word.islower() or word.istitle():
            return True
        else:
            return False

        
            

s = Solution()
print(s.detectCapitalUse1('USA'))   #Output -> True
print(s.detectCapitalUse1('g'))     #Output -> True
print(s.detectCapitalUse1('FlaG'))  #Output -> False