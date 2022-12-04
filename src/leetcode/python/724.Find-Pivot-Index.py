class Solution:  
    def pivotIndex(self, nums: List[int]) -> int:
        """
        Given an array of integers nums, calculate the pivot index of this array.
        The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.
        If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.
        Return the leftmost pivot index. If no such index exists, return -1.

        Solution:
        To solve this we have two running sums, an initial one that sums all elements to the end (right)
        which then decrements as the left sum increases.
        if the left and right sum is equivalent then return the current index
        """

        # initialize right sum
        right_sum = 0

        # populate right sum
        for x in nums:
            right_sum += x

        # initalize left sum
        left_sum = 0
        for i in range(len(nums)):

            # remove the value at possible pivot index from right sum
            right_sum -= nums[i]

            # compare for equality which would mean pivot index
            if left_sum == right_sum:
                return i
            # increate the left sum
            left_sum += nums[i]

        # if we get here we have no solution hence return -1
        return -1
