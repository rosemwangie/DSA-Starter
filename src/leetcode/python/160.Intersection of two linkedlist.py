'''
Given the heads of two singly linked-lists headA and headB, 
return the node at which the two lists intersect. If the two linked lists have no intersection at all, 
return null.
'''

class ListNode:
    def __init__(self, val = 0 ):
        self.val = val 
        self.next = next

class Solution:
    #Optimal solution 1 -> Time Complexity O(m + n) Space Complexity O(1)
    def getIntersectionNode(self, headA: Optional[ListNode], headB: Optional[ListNode]):
        #pointer to both heads of the linked list
        pointerA, pointerB = headA, headB
        #tracks the number on nodes in both linkedlists
        countA, countB = 0, 0 
        #as long as pointerA != none
        while pointerA:
            #move to the node
            pointerA = pointerA.next
            #increment countA
            countA +=1
        while pointerB:
            pointerB = pointerB.next
            countB +=1

        #reset the positiion of the pointers to their respective heads
        pointerA, pointerB = headA, headB   
        #move pointers to the same starting point
        if countA > countB:
            for i in range(countA - countB):
                pointerA = pointerA.next
        else:
            for i in range(countB - countA):
                pointerB = pointerB.next
        #loop through both listnodes and return the point of intersection
        while pointerA and pointerB:
            if pointerA == pointerB:
                return pointerA
            pointerA = pointerA.next
            pointerB = pointerB.next
        return None

s= Solution()
print(s.getIntersectionNode([4,1,8,4,5], [5,6,1,8,4,5]))    #Output -> intersection at '8'
print(s.getIntersectionNode([1,9,1,2,4], [3,2,4]))    #Output -> intersection at '2'
print(s.getIntersectionNode([2,6,4], [1,5]))    #Output -> No intersection