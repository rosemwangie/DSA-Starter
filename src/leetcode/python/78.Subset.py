'''Given an integer array nums of unique elements, return all possible 
subsets
 (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.
'''
class Solution:
    #sln1 Time Complexity: O(2^n *n) Space Complexity O(2^n *n)
    def subsets(self, nums: List[int]) -> List[List[int]]:
        output = []

        def helper(self, nums, i, subset):
            if i == len(nums):
                output.append(subset.copy())
                return 
            helper(self, nums, i+1, subset)
            subset.append(nums[i])
            helper(self, nums, i+1, subset)
            subset.pop()
        helper(self, nums, 0, [])
        return output