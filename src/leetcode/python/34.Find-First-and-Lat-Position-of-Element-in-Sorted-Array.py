'''
    Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
    If target is not found in the array, return [-1, -1].

    You must write an algorithm with O(log n) runtime complexity.

 '''

#Optimal solution TIme complexity O(log n) Space complexity O(1)
class Solution:
    
    def findFirstAndLast(self, nums: List[int], target: int) -> List[int]:
        left = self.firstEl(nums, target)
        right = self.lastEl(nums, target)

        return [left, right]


    def firstEl(self, nums: List[int], target: int) -> List[int]:
        left = 0
        right = len(nums) -1

        while left <= right:
            mid = round((left + right) //2)

            if nums[mid] == target:
                if mid == 0 or nums[mid-1] != target and mid-1 >=0:
                    return mid
            right = mid -1
            elif nums[mid] > target:
                right = mid -1
            else:
                left = mid +1
    return -1


    def lastEl(self, nums: List[int], target: int) -> List[int]:
        left = 0
        right = len(nums)-1

        while left <=right:
            mid = round((left + right ) //2)

            if nums[mid] == target:
                if len(nums)-1 == target or nums[mid+1] != target and mid+1 <= len(nums)-1:
                    return mid
                left = mid +1
            elif nums[mid] > target:
                right = mid-1
            else:
                left = mid+1

        return -1


print(findFirstAndLast([5, 7, 7, 8, 8, 10]), 8); #[3,4]
print(findFirstAndLast([5, 7, 7, 8, 8, 10]), 6); # [-1,-1]
print(findFirstAndLast([])); #[-1,-1]


