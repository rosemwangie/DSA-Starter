'''Given an array, rotate the array to the right by k steps, where k is non-negative.'''

class Solution:

    #brute force/naive approach Time complexity O(n) Space complexity O(k)
    def rotate1(self, nums: List[int], k: int)-> List[int]:
        k = k%nums.length
        temp = nums[-k:]
        for i in reversed(range(0, len(nums)-k)):
            nums[i+k] = nums[i]
        for i in range(len(temp)):
            nums[i] = temp[i]
        return nums

    #Optimal soln1 Time complexity O(n) Space complexity O(1)
    def reverse(self, arr, start, end):                     #helper function(optional!)
        while start < end:
            arr[start], arr[end] = arr[end], arr[start]
            start +=1
            end-=1
        return arr

    def rotate2(self, nums:List[int], k: int) -> List[int]:
        k = k%len(nums)
        reverse(nums, 0, len(nums)-)
        reverse(nums, 0, k-1)
        reverse(nums, k, len(nums)-1)
        return nums
