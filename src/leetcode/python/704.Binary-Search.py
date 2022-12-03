class Solution:

    #Optimal Soln  O(logn)
    def binarySearch(self, nums, target):

        left = 0 
        right = len(nums)-1

        while left <= right:
             midNum = round(( left + right ) // 2)

             if nums[midNum] == target:
                return midNum
            elif target < nums[midNum]:
                right = midNum -1
            else:
                left = midNum +1
        return -1

