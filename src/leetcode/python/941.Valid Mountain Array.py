'''
Given an array of integers arr, return true if and only if it is a valid mountain array.

Recall that arr is a mountain array if and only if:

arr.length >= 3
There exists some i with 0 < i < arr.length - 1 such that:
arr[0] < arr[1] < ... < arr[i - 1] < arr[i] 
arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
'''
class Solution:
    #Optimal solution Time Complexity O(n) Space Complexity O(1)
    def validMountainArray(self, arr: List[int]) -> bool:
        #return Falseif length of array is less than 3 and sets a pointer to the second element
        if len(arr) < 3:     
            return False          
        pointer = 1               

        #as long as the pointer is less than the length of array and the element at the pointer is greater than the previous element
        while pointer < len(arr) and arr[pointer] > arr[pointer-1]:     
            #increment the pointer
            pointer += 1
            
        #checks if the pointer moved or is at the end of the array and returns False
        if pointer == 1 or pointer == len(arr):
            return False 
        #as long as the pointer is less than the length of array and the element at the pointer is less than the previous element
        while pointer < len(arr) and arr[pointer] < arr[pointer-1]:
            #increment the pointer by one
            pointer += 1

        return pointer == len(arr)

print(Solution().validMountainArray([0,3,2,1]))                 #True
print(Solution().validMountainArray([0,1,2,3,4,5,4,3,2,1]))     #True