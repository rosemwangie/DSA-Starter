'''
Given an integer x, return true if x is a palindrome, and false otherwise.
'''

class Solution:
    #Brute/Naive Approach Time complexity O(n) Space Complexity O(n)
    def isPalindrome(self, x: int) -> bool:
        return str(x) == str(x)[::-1]

    #Optimal Solution Math Operations Time Complexity O(n) Space Complexity O(1)
    def isPalindrome1(self, x: int) -> bool:
        #if the number is negative return False
        if x < 0:
            return False
        original = x
        reversed_sum = 0
        while x > 0:
            reversed_sum = reversed_sum * 10 + x % 10
            x //=10
        return original == reversed_sum

    #Optimal sln3 Time complexity O(n) Space Complexity O(1)
    def isPalindrome2(self, x: int) -> bool:
        #121
        x = str(x)
        left = 0
        right = len(x) -1
        while left < right:
            if left[x] != right[x]:
                return False
            left +=1
            right -=1
        return True


s = Solution()
print(s.isPalindrome([121])) #Output -> True
print(s.isPalindrome([-121])) #Output -> False
print(s.isPalindrome([19])) #Output -> False
