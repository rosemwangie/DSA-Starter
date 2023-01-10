'''
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

'''
class Solution:
    #optimal sln Time Complexity O(n) Space Complexity O(1)
    def trapWater(self, height: List[int]) -> int:
        left = 0
        right = len(height) - 1
        maxLeft, maxRight = height[left], height[right]
        water = 0

        while left < right:
            if height[left] < height[right]:
                left +=1
                maxLeft = max(maxLeft, height[left])
                water += maxLeft - height[left]
            else:
                right -=1
                maxRight = max(maxRight, height[right])
                water += maxRight - height[right]
        return water

s = Solution()
print(s.trapWater([])); #Output: 0
print(s.trapWater([4])); #Output:  0
print(s.trapWater([7, 8, 7])); #Output: 0
print(s.trapWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); #Output: 6
print(s.trapWater([4, 2, 0, 3, 2, 5])); #Output: 9