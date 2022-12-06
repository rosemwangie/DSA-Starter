'''Given an integer array nums sorted in non-decreasing order, return an array of the squares of each
     number sorted in non-decreasing order.
'''

class Solution:

    #brute force/naive approach Time complexity O(nlogn) Space complexity O(n)
    def sortedSquare(self, nums: List[int]) -> List[int]:
        newArray = [0]*len(nums)

        for num in range(len(nums)):
            newArray = nums[nums] ** 2
        
        newArray.sort()
        return newArray

    

    #Optimal soln1 Time complexity O(n) Space complexity O(n)
    def sortedSquare1(self, nums: List[int]) -> List[int]:
        newArray = [0] * len(nums)
        left = 0
        right = len(nums) -1

        for k in reversed(range(len(nums))):
            leftsq = nums[left] **2
            rightsq = nums[right] **2

            if leftsq > rightsq:
                newArray[k] = leftsq
                left +=1
            else:
                newArray[k] = rightsq
                right -=1

        return newArray





print(Solution().sortedSquare1([-4,-1,0,3,10]));     #[0,1,9,16,100]
print(Solution().sortedSquare1([-7,-3,2,3,11]));    #[4,9,9,49,121]

