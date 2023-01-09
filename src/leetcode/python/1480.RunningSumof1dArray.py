"""
    Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
    Return the running sum of nums.

    This algorithm uses constant extra space
"""
class Solution:
    #optimal sln Time Complexity O(n) Space Complexity O(1)
    def runningSum(self, nums: List[int]) -> List[int]:

        for i in range(1, len(nums)):
            nums[i] += nums[i-1]
            
        return nums

    #Optimal sln Time Complexity O(n) Space complexity 0(1)
    def runningSum(self, nums:List[int]) -> List[int]:
        res = 0 
        for i in range(len(nums)):
            res += nums[i]
            nums[i] = res
        return nums

s = Solution()
print(s.runningSum([1,2,3,4]))  #[1,3,6,10]
print(s.runningSum([1,1,1,1]))  #[1,2,3,4,5]
print(s.runningSum([3,1,2,10,1]))   #[3,4,6,16,17]