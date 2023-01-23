'''
Given the head of a linked list and an integer val, 
remove all the nodes of the linked list that has Node.val== val
'''
class ListNode:
    def __init__(self, val = 0):
        self.val = val
        self.next = next
    
class Solution:
    #Optimal sln Time Complexity O(n) Space Complexity O(1)
    def removeElements(self, head:Optional[ListNode], val:int)->Optional[ListNode]:
        #create a fake node
        dummy = ListNode()
        #set it's pointer to the head
        dummy.next = head
        #set the dummy node as a prev node
        prev = dummy
        #set the current pointer to the head
        current = head
        #loop through the listnode as long as the current pointer is not null
        while current:
            if current.val == val:
                #set the previous Node pointer to the next element from the current one
                prev.next = current.next
            else:
                prev = current
            current = current.next
        return dummy.next


                #or


    def removeElements1(self, head:Optional[ListNode], val:int)->Optional[ListNode]:
        #edge case, if the head is none return none
        if head == None:
            return None
        #set the previous node to none initially
        prev = None
        #set the current pointer to our head node
        current = head
        #loop as long as our current is not none
        while current:
            #if the value of the node at our current is equalt to our value
            if current.val == val:
                #and a previous element exists(not None)
                if prev:
                    #update the previous pointer to the next Node from our current
                    prev.next = current.next
                #if no previous element exist
                else:
                    #update our head to be our next Node
                    head = current.next
            #if the values don't match update the previous element to be at our current
            else:
                prev = current
            #update our current element to it's next Node
            current = current.next
        #return
        return head
        

s = Solution()
print(s.removeElements([1,2,6,3,4,5,6]), val=6) #Output-> [1,2,3,4,5]
print(s.removeElements([]), val=1) #Output-> []
print(s.removeElements([7,7,7,7]), val=7) #Output-> []