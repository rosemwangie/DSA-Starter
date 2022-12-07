'''An array is monotonic if it is either monotone increasing or monotone decreasing.

An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. An array nums is monotone decreasing if for all i <= j, nums[i] >= nums[j].

Given an integer array nums, return true if the given array is monotonic, or false otherwise.
'''


class Solution:
    
    #optimal sln Time= O(n) Space= O(1)
    def isMonotonic(self, nums: List[int]) -> bool:
        left = nums[0]
        right = nums[len(nums)-1]

        if left == right:
            for i in range(len(nums)-1):
                if nums[i] != nums[i+1]:
                    return False 
        elif left > right:
            for i in range(len(nums)-1):
                if nums[i] < nums[i+1]:
                    return False
        else:
            for i in range(len(nums)-1):
                if nums[i] > nums[i+1]:
                    return False
        return True  




print(Solution().isMonotonic([1,2,2,3]))  #true
print(Solution().isMonotonic([6,5,4,4]))  #true
print(Solution().isMonotonic([1,3,2]))  #true