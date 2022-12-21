'''
    You are given an array people where people[i] is the weight of the ith person,
    and an infinite number of boats where each boat can carry a maximum weight of limit.
     Each boat carries at most two people at the same time, provided the sum of the weight of those people is at most limit.

    Return the minimum number of boats to carry every given person.
'''

class Solution:

    #sln1--> Time Complexity  O(n) Space Complexity O(1)
    '''
        -Sort the array in ascending order
        -Assign two pointers from the start to end and  a prefix sum to track number of boats
        -Loop through the array as long as  left < right
        -Check on the sum of the elements of the left and right pointers 
        -Return the number of boats needed
    '''
    def numRescueBoats(self, people:List[int], limit:int)->bool:
        people.sort()
        left = 0
        right = len(people) -1
        boats = 0
        while left <= right:
            if people[left] + people[right] <= limit:
                left +=1
                right -=1
                boats +=1
            else:
                boats +=1
                right -=1
        return boats
