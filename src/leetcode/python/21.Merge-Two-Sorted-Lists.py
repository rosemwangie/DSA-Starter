'''
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.
'''

class ListNode:
    def __init__(self, val=0, next=None) -> None:
        self.val = val
        self.next = next

class Solution:
    #Optimal sln1-> Time Complexity O(n) ->Space Complecity O(1)
    def mergeTwoSortedLists(self, List1: Optional[ListNode], List2: Optional[ListNode])-> Optional[ListNode]:
        #initialize a new node to store the merged list(will also be the head)
        temp = ListNode()
        current = temp
        #as long as list1 and list 2 are note empty
        while List1 and List2:
            if List1.val < List2.val:
                #the next node in our temporary node should be the less value 
                current.next = List1
                List1 = List1.next
            else:
                current.next = List2
                List2 = List2.next

        #check for remaining nodes left in either list1 or list2
        if List1:
            current.next = List1
            List1 = List1.next
        else:
            current.next = List2
            List2 = List2.next
        #return the merged list from the next node
        return temp.next


s = Solution()
print(s.mergeTwoSortedLists([1, 2, 4], [1, 3, 4])) #Output: [1,1,2,3,4,4]
print(s.mergeTwoSortedLists([], []))    #Output: []
print(s.mergeTwoSortedLists([], [0]))   #Output: [0]