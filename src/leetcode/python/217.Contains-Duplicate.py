'''Given an integer array nums, return true if any value appears at least twice in the array, 
    and return false if every element is distinct.
 '''

class Solution:
    #Brute Force/Naive Approach--> Time complexity O(n^2) Space Complexity O(1)
    def containsDuplicate(self, nums: List[int]) -> bool:
        #Loops from the first element of the array
        for i in range(len(nums)):
            #loops from the second element of the array
            for j in range(i+1, len(nums)):
                if nums[i] == nums[j]:
                    return True 
        return False


    #Optimal sln1-Sorting function: Time Complexity O(n log n) Space complexity O(1)
    def containsDuplicate1(self, nums: List[int]) -> bool:
        if len(nums) < 2: return False
        #sort the array
        nums.sort()
        #The loop runs till the second last element for comparison to occur
        for i in range(len(nums)-1):
            #compare the current element with the next
            if nums[i] == nums[i+1]:
                return True
        return False


    #Optimal sln2 -Use sets : Time Complexity -> O(n) Space Complexity O(n)
    #A set is a data type in python that is unordered, unchangeable*, unindexed and does not contain duplicates
    def containsDuplicate2(self, nums: List[int]) -> bool:
        # this line returns true if the length of the original array 
        #is not equal to the newly formed set because a set has no duplicates
        return len(nums) != len(set(nums))


    #Optimal sln3- Use HashMap: Time Complexity O(n) Space Complexity O(n)
    def containsDuplicate3(self, nums: List[int]) -> bool:
        #hashMap to store the elements traversed
        hashMap = {}        
        for num in  nums:
            #if the element is in the hashMap return true else insert the element in the hashMap
            if num in hashMap:
                return True
            else:
                hashMap[num] = num
        return False


#Test CASES
print(Solution().containsDuplicate3([1,2,3,1])) #True
print(Solution().containsDuplicate3([1,2,3,4])) #False
print(Solution().containsDuplicate3([1,1,1,3,3,4,3,2,4,2])) #True