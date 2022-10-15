def twoSum(self, nums: List[int], target: int) -> List[int]:
    """
    Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
    You may assume that each input would have exactly one solution, and you may not use the same element twice.
    You can return the answer in any order.
    """

    # dictionary to store indexes of previously seen numbers
    lookup = {}

    # iterate through the array
    for i in range(len(nums)):
        diff = target - nums[i]
        if diff in lookup:
            return [i, lookup[diff]]
        if nums[i] not in lookup:
            lookup[nums[i]] = i
