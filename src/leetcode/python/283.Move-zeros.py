'''
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

 
'''

class Solution:
    #Optimal sln -> Time Complexity O(n) Space Complexity O(1)
    def move_zeros(self, nums:List[int])-> List[int]:
        #points to the first element of the array
        pointer = 0
        #stores the length of the array
        length = len(nums)

        #loop through the array
        for num in nums:
            #check if an element is not zero and assigns the value at the pointer a non-zero element.
            if num != 0:
                nums[pointer] = num 
                #increment position of pointer
                pointer += 1
        
        #for all the elements of the array left replace the elements with a zero
        for rest in range(pointer, length ):
            nums[rest] = 0
        return nums


print(Solution().move_zeros([0,1,0,3,12]))    #[1,3,12,0,0]
print(Solution().move_zeros([0]))    #[0]
