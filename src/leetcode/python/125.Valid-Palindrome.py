'''
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and 
removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

 '''

class Solution:
    #sln1--> Time complexity O(n): Space complexity O(1)
    '''
        -Assign two pointers at the beginning and end of string
        -Loop through the string as long as left < right
        -Ignore all non-alphanumeric characters by setting the isalnum() python inbuilt method to false
        on every characrer of the string by incrementing the pointers 
        -Check if the left character is equal to the right character,  increment the pointers if true
        -Otherwise return True if left == right
    '''
    def isPalindrome(self, s:string)->bool:
        left = 0
        right = len(s)-1
        while left < right:
            while left < right and not s[left].isalnum():
                left +=1
            while left < right and not s[right].isalnum():
                right -=1
            
            if s[left].lower() != s[right].lower():
                return False
            
            left += 1
            right -= 1
        return True 


    #sln2--> Time Complexity O(n): Space Complexity O(n)
    '''
        -Create a string comprehension and filter out all non-alphanumeric characters
        -Join the characters from the created string and convert to lower case letters
        -Loop through half of the array with the right pointer at the first half and right pointer at the end of the second half
        -Compare the characters of the left and right pointers
    '''
    def isPalindrome2(self, s:string)->bool:
        s = [c for c in s if c.isalnum()]
        s = ''.join(s).lower()
        for i in range(len(s)//2):
            left = i
            right = len(s) - i - 1
            if s[left] != s[right]:
                return False
        return True 
    
    #sln3-->Time Complexity O(n): Space Complexity O(n)
    
    #THe last return statement compares the original string with the reversed string 
    def isPalindrome3(self, s:string)->bool:
        s = [c for c in s if c.isalnum()]
        s = ''.join(s).lower()
        return s == s[::-1]

s = Solution()
print(s.isPalindrome("A man, a plan, a canal: Panama")) #true
print(s.isPalindrome("race a car")) #false
print(s.isPalindrome(" "))  #true
        