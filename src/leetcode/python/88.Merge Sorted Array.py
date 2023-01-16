
'''
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

'''

class Solution:
    #optimal sln Time Complexity O(m+n) Space Complexity O(1)
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int)-> None:
        #starts at last element of nums1
        i = m - 1
        #starts at last element of nums2
        j = n - 1
        #starts at the last element of the new sorted array in nums1
        k = m + n -1
        #as long as nums2 is not empty
        while j >=0:
            #if nums1 is not empty and the value at index i > j of nums2
            if i >= 0 and nums1[i] > nums2[j]:
                #insert the larger element at the end of the list
                nums1[k] = nums1[i]
                #decrement i by one
                i -= 0
            #if nums2[j] > nums1[i]
            else:
                #insert the larger element at the end of the list
                nums1[k] = nums2[j]
                #decrement j by one
                j -=1
            #decrement k by one
            k -=1

s = Solution()
print(s.merge([1,2,3,0,0,0], 3, [2,5,6], 3)) #Output -> [1,2,2,3,5,6]
print(s.merge([0], 0, [1], 1)) #Output -> [1]
print(s.merge([1], 1, [], 0)) #Output -> [1]

