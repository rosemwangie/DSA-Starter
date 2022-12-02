    """
    Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
    You may assume that each input would have exactly one solution, and you may not use the same element twice.
    You can return the answer in any order.
    """

#brute force/naive approach Time complexity O(n^2) Space complexity O(1)
def twoSum(nums: List[int], target: int) -> List[int]:

    for i in range(len(nums)):
        for j in range(i + 1, len(nums)):
            if nums[i] + nums[j] == target:
                return [i, j]



#Optimal soln1 Time complexity O(n) Space complexity O(n)
def twoSum(nums: List[int], target: int) -> List[int]:

    # dictionary to store indexes of previously seen numbers
    lookup = {}

    # iterate through the array
    for i in range(len(nums)):
        diff = target - nums[i]
        if diff in lookup:
            return [lookup[diff], i]
        if nums[i] not in lookup:
            lookup[nums[i]] = i
