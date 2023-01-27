'''
Given an integer x, return true if x is a palindrome, and false otherwise.
'''

class Solution:
    #Brute/Naive Approach Time complexity O(n) Space Complexity O(n)
    def isPalindrome(self, x: int) -> bool:
        return str(x) == str(x)[::-1]

    #Optimal Solution Math Operations Time Complexity O(n) Space Complexity O(1)
    def isPalindrome1(self, x: int) -> bool:
        pass

s = Solution()
print(s.isPalindrome([121])) #Output -> True
print(s.isPalindrome([-121])) #Output -> False
print(s.isPalindrome([19])) #Output -> False
