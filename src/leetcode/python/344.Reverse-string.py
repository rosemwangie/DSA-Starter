'''
Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

'''

class Solution:
    #Optimal sln -> Time Complexity O(n) Space complexity O(1)
    def reverseString(self, s: List[str]) -> None:
        #Do  not return anything!
        left = 0
        right = len(s) -1
        while left < right:
            s[left], s[right] = s[right], s[left]
            left +=1
            right -=1



s = Solution()
print(s.reverseString(["h","e","l","l","o"])) #Output -> ["o","l","l","e","h"]
print(s.reverseString(["H","a","n","n","a","h"])) #Output -> ["h","a","n","n","a","H"]

