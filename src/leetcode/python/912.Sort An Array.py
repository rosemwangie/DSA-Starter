'''Given an array of integers nums, sort the array in ascending order and return it.

You must solve the problem without using any built-in functions in O(nlog(n)) time complexity and with the smallest space complexity possible.

'''

class Solution:

    '''
        If the input array has length 1, return the array (it is already sorted).
        Split the array into two halves.
        Recursively sort each half.
        Merge the two sorted halves back together, in ascending order.
    '''
    #Sln1 -> Time Complexity O(n log n ) Space Complexity
    def sortedArray(self, nums: List[int])-> List[int]:
        def split(self, nums):
            mid= len(nums)//2
            left = nums[:mid]
            right = nums[mid:]
            return left, right
        
        def merge(self, left, right):
            l = []
            i = 0
            j = 0
            while i < len(left) and j < len(right):
                if left[i] < right[j]:
                    l.append(left[i])
                    i +=1
                else:
                    l.append(right[j])
                    j +=1
            while i < len(left):
                l.append(left[i])
                i +=1
            while j < len(right):
                l.append(right[j])
                j +=1
            return l

        if len(nums) <= 1:
            return nums
        leftList, rightList = split(self, nums)
        left = self.sortedArray(leftList)
        right = self.sortedArray(rightList)
        return merge(self, left, right)



    #sln2 Time Complexity -> O(n log n) Space Complexity O(1)
    def sortedArray1(self, nums):
        nums.sort()
        return nums

print(Solution().sortedArray([5,2,3,1]))  #[1,2,3,5]
print(Solution().sortedArray([5,1,1,2,0,0]))  #[0,0,1,1,2,5]