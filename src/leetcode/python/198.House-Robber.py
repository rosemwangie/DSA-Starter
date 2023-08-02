'''
You are a professional robber planning to rob houses along a street. 
Each house has a certain amount of money stashed, the only constraint stopping you
from robbing each of them is that adjacent houses have security systems connected and 
it will automatically contact the police if two adjacent houses were broken into on the
same night.

Given an integer array nums representing the amount of money of each house,
return the maximum amount of money you can rob tonight without alerting the police.
'''
 

class Solution:

    '''
    Optimal soln1
    Time complexity O(n) 
    Space complexity O(n)
    '''
    def houseRobberMemo(self, nums):
        if len(nums) < 2:
            return nums[0]
        
        memo = [0] * len(nums)
        memo[0] = nums[0]
        memo[1] = max(nums[0], nums[1])

        for i in range(2, len(nums)):
            memo[i] = max(memo[i-1], memo[i-2] + nums[i])
        
        return memo[len(nums) -1]
    
    '''
    Optimal soln2
    Time complexity O(n) 
    Space complexity O(1)
    '''
    def houseRobberBottomUp(self, nums):
        rob1, rob2 = 0, 0

        for n in nums:
            temp = max(rob1 + n, rob2)
            rob1 = rob2
            rob2 = temp

        return rob2
    

#test cases
s = Solution()
print(s.houseRobberMemo([1,2,3,1])) #4
print(s.houseRobberMemo([2,7,9,3,1])) #12
print(s.houseRobberMemo([2,1,1,2])) #4