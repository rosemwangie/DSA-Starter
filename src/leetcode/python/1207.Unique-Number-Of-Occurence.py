'''
Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.

'''

class Solution:
    #Optimal sln1-> Time Complexity O(n) Space Complexity O(n)
    def uniqueOccurrences(self, arr: List[int])-> bool:
        dic = {}
        for num in range(len(arr)):
            if arr[num] not in dic:
                dic[arr[num]] = 1
            else:
                dic[arr[num]] +=1
        
        occurrences = dic.values()
        if len(occurrences) == len(set(occurrences)):
            return True
        return False
        # return len(dic) == len(set(dic.values()))

s = Solution()
print(s.uniqueOccurrences([1,2,2,1,1,3])) #Output->true
print(s.uniqueOccurrences([1,2])) #Output->false
print(s.uniqueOccurrences([-3,0,1,-3,1,1,1,-3,10,0])) #Output->true