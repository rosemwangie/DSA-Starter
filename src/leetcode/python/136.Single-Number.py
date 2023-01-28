'''
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.
'''

class Solution:

    #optimal solution1 Time Complexity O(nlog(n)) Space Complexity O(1)
    def singleNumber(self, nums: List[int]) -> int:
        nums.sort()
        for i in range(0, len(nums), 2):
            if nums[i] != nums[i +1]:
                return nums[i]
        return nums[-1]

    