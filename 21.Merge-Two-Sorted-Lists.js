/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    //corner case 1: If one of the lists is empty, return the other list
   if (list1 === null) {
        return list2;
    }
    if (list2 === null) {
        return list1;
    }
    
    // Initialize a temp node to hold the merged list
    let temp = new ListNode();
    let current = temp;
    
    // Iterate through both lists and add the smaller element to the merged list
    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }
    
    // Add the remaining elements of the non-empty list to the merged list
    if (list1 !== null) {
        current.next = list1;
    } else {
        current.next = list2;
    }
    
    // Return the merged list, starting from the second node (the first node is the temp node)
    return temp.next;
};

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4])) //Output: [1,1,2,3,4,4]
console.log(mergeTwoLists([], [])) // Output: []
console.log(mergeTwoLists([], [0])) // Output: [0]

/**
* O(n) - Time complexity 
*/
