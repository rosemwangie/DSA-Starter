'''
Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:

Starting with any positive integer, replace the number by the sum of the squares of its digits.
Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
Those numbers for which this process ends in 1 are happy.
Return true if n is a happy number, and false if not.
'''


class Solution:
    #Sln1-> Time Complexity O(k) Space Complexity O(m) 
    # Note that K represents the number of iterations while m the number of unique numbers encountered!!
    def isHappy(self, n: int)-> bool:
        seen = set()
        while n not in seen:
            seen.add(n)
            n = self.sumOfSquares(n)

            if n == 1:
                return True
        return False

    #helper function to get the sum of the squares
    def sumOfSquares(self, n: int)-> int:
        sum = 0
        while n:
            #gets the last digit
            digit = n % 10
            #squares it
            digit = digit ** 2
            #adds it to the sum
            sum += digit
            #removes the last digit by flooring the number
            n = n // 10
        return sum

    #Sln2->Time Complexity O(k) ->Space Complexity O(m) 
    def isHappy2(self, n: int)-> bool:
        seen = set()
        while n not in seen:
            seen.add(n)
            n = sum(int(d)**2 for d in str(n))
        return n == 1



s = Solution()
print(s.isHappy(19)) # Output-> True
print(s.isHappy(2)) #Output -> False

