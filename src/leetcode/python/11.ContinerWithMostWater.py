'''You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.
'''

class Solution:

    #Brutal force solution 1 Time Complexity: O(n^2) Space Complexity: O(1)

    def maxArea(self, height: List[int]) -> int:
        area = 0
        for i in range(len(height)-1):
            for j in range(i+1, len(height)):
                minHeight = min(height[i], height[j])
                width = j-i 
                area = max(area, minHeight * width)
        return area

    #Optimal solution 2 Time Complexity: O(n) Space Complexity: O(1)

        def maxArea2(self, height:List[int]) -> int:
            area = 0
            left = 0
            right = len(height)-1
            while left < right:
                minHeight = min(height[left],height[right])
                width = right - left
                area = max(area, minHeight * width)
                if height[left] < height[right]:
                    left +=1
                else:
                    right -=1
            return area



print(Solution().maxArea2([1, 8, 6, 2, 5, 4, 8, 3, 7])); 
print(Solution().maxArea2([1, 1])); # 1*1= 1
print(Solution().maxArea2([5])); # 0
print(Solution().maxArea2([])); # 0

    