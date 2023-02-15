'''
The array-form of an integer num is an array representing its digits in left to right order.

For example, for num = 1321, the array form is [1,3,2,1].
Given num, the array-form of an integer, and an integer k, return the array-form of the integer num + k.
'''

class Solution:
    #Sln1 : Time Complexity-> O(max(N, log(k))) Space Complexity-> O(max(N, log(k)))
    def addToArrayForm(self, num: List[int], k: int) -> int:
        digits = []
        carry = 0
        i = len(num) - 1
        while i >= 0 or k > 0 or carry != 0:
            x = num[i] if i >= 0 else 0
            y = k % 10 if k > 0 else 0
            digit = x + y + carry
            digits.append(digit % 10)
            carry = digit // 10
            i -= 1
            k //= 10
        digits.reverse()
        return digits if digits else [0]


s = Solution()
print(s.addToArrayForm([1,2,0,0], 34)) # Output-> 1234
print(s.addToArrayForm([2,7,4], 181)) #Output -> 455
print(s.addToArrayForm([2,1,5], 806)) # Output-> 1021

#The O(max(N, log(k))) refers to the maximum of the two values (N)-> size of input arrat (k)-> number of digits in k
#If the size on input (n) is larger than the number of digits in (k), 
# the time complexity will be determined by the size of the input(the array) and vise versa