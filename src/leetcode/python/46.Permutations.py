'''Given an array nums of distinct integers, return all the possible permutations. 
You can return the answer in any order.
'''
class Solution:
    #soln Time complexity O(n!*n) Space complexity O(n!*n)
    def permute(self, nums: List[int]) -> List[List[int]]:
        permutations = []
        if len(nums) == 0:
            return [[]]
        def helper(self, nums, i):
            if i == len(nums)-1:
                permutations.append(nums[:])
                return 
            for j in range(i, len(nums)):
                nums[i], nums[j] = nums[j], nums[i]
                helper(self, nums, i+1)
                nums[i], nums[j] = nums[j], nums[i]

        helper(self, nums, o)
        return permutations


print(Solution().permute([1,2,3])) # [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,2,1],[3,1,2]]
print(Solution().permute([0,1]))   # [[0,1],[1,0]]
print(Solution().permute([1]))     #[[1]]


 