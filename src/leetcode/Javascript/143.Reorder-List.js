/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
const reorderList = (head) => {
  // Edge case: if the list is empty or has only one node
  if (!head || !head.next) {
    return;
  }

  // Find the middle of the list
  let slow = head,
    fast = head;
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Reverse the second half of the list
  let prev = null,
    curr = slow.next;
  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  // Reorder the list by interleaving the nodes
  slow.next = null; // Cut the list in half
  let first = head,
    second = prev;
  while (second) {
    let nextFirst = first.next,
      nextSecond = second.next;
    first.next = second;
    second.next = nextFirst;
    first = nextFirst;
    second = nextSecond;
  }
};

console.log(reorderList([1, 2, 3, 4])); //Output: [1,4,2,3]
console.log(reorderList([1, 2, 3, 4, 5])); //Output: [1,5,2,4,3]
console.log(reorderList([])); //Output: []


/**
 * Time complexity O(n)
 */