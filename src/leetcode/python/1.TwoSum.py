    """
    Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
    You may assume that each input would have exactly one solution, and you may not use the same element twice.
    You can return the answer in any order.
    """

class Solution:

    #brute force/naive approach Time complexity O(n^2) Space complexity O(1)
    def twoSum1(self, nums: List[int], target: int) -> List[int]:

        for i in range(len(nums)-1):
            for j in range(i + 1, len(nums)):
                if nums[i] + nums[j] == target:
                    return [i, j]
        return []



    #Optimal soln1 Time complexity O(n) Space complexity O(n)
    def twoSum2(self, nums: List[int], target: int) -> List[int]:

        # dictionary to store indexes of previously seen numbers
        lookup = {}

        # iterate through the array
        for i in range(len(nums)):
            diff = target - nums[i]
            if diff in lookup:
                return [lookup[diff], i]
            else:
                lookup[nums[i]] = i
        return []



print(Solution().twoSum2([2, 7, 11, 15], 9));     # [0,1]
print(Solution().twoSum2([31, 10, 7, 9], 6));    # [-1,-1]
print(Solution().twoSum2([3], 7));              # [-1, -1]
print(Solution().twoSum2([ ], 20));            # [-1, -1]] 
print(Solution().twoSum2([3, 3], 6));         # [0,1]
