
/*
* Given head, the head of a linked list, determine if the linked list has a cycle in it.
* There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. 
  Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.
* Return true if there is a cycle in the linked list. Otherwise, return false.
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = (head) => {
    // Initialize two pointers, slow and fast
    let slow = head;
    let fast = head;
    
    // Iterate through the linked list
    while (fast && fast.next) {
        // Move slow pointer one step
        slow = slow.next;
        // Move fast pointer two steps
        fast = fast.next.next;
        
        // If slow and fast pointers meet, there is a cycle
        if (slow === fast) {
            return true;
        }
    }
    
    // If fast pointer reaches the end of the list, there is no cycle
    return false;
};

console.log(hasCycle([3,2,0,-4], pos = 1)) //. Output: true
console.log(hasCycle([1], pos = 0)) // Output: true
console.log(hasCycle([1], pos = -1)) // Output: false

// Floyd's cache-finding algorithm or tortoise and hare algorithm
// Two pointer operation, one moving at a slower pace(the tortoise) and one moving at a faster pace(the hare).
// If the linked list has a cycle, the fast pointer will eventually catch up to the slow pointer.


/*
* Time complexity - O(n) - where n is the total number of elements in the linked list
*/
