'''
    The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

    F(0) = 0, F(1) = 1
    F(n) = F(n - 1) + F(n - 2), for n > 1.
    Given n, calculate F(n).

'''


class Solution:
    #brute force / naive approach-> Time complexity O(2^n) :Space Complexity O(n) -->(Recursion)
    def fib(self, n: int) -> int:
        if n <= 1:
            return n
        else:
            return self.fib(n-1) + self.fib(n-2)

    
    #optimal sln1 (Recursion + space) -> Time complexity: O(n) Space coplexity O(n)
    def fib1(self, n: int) -> int:
        ht = {0:0, 1:1}
        if n in ht:
            return ht[n]
        else:
            ht[n] = self.fib1(n-1) + self.fib1(n-2)
            return ht[n]

    #Optimal sln-> Time Complexity O(n) Space Comlexity O(1)
    def fib2(self, n: int) -> int:
        if n <= 1:
            return n 
        count = 1
        prev = 0
        curr = 1
        while count < n:
            next = prev + curr
            prev = curr
            curr = next
            count +=1
        return curr

s = Solution()
print(s.fib2(2))    #1
print(s.fib2(3))    #2
print(s.fib2(4))    #3