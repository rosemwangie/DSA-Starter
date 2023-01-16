//Given a linked list and numbers m & N , return it back with only positions m and n reversed

//1. Verify Constraints (edge cases)
/*
1. Clarify if the position is zero or 1 index?
2. WIll m and n always be within the bounds of the linked list? Yes, Assume 1 <= m <= n <= length of linked list
3. Can we receive m and n values for the whole linked list? Yes, we can receive m = 1 and n = length of linked list
*/

// 2. Test cases
/*
1. 1,2,3,4,5 // 1,4,3,2,5  m=2 n=4
2. 1,2,3,4,5 //  5,4,3,2,1  m=1 n=5
3. 5   // 5 m=1 n=1
4. null m=0 n=0
*/

// Reversing a segment of a Linked list
/*
Important values: m-1, m, n,n+1
Step 1: Get current node
Step 2: Stash next value
Step 3: Update next value to list so far
Step 4: Store currentNode of list so far
Step 4: Update current node to stored next value @ 2
*/
const reverseBetween = (head, left, right) => {
  let currPos = 1,
    currNode = head;
  let start = head;

  while (currPos < left) {
    start = currNode;
    currNode = currNode.next;
    currPos++;
  }

  let newList = null,
    tail = currNode;

  while (currPos >= left && currPos <= right) {
    const next = currNode.next;
    currNode.next = newList;
    newList = currNode;
    currNode = next;
    currPos++;
  }

  start.next = newList;
  tail.next = currNode;

  if (left > 1) {
    return head;
  } else {
    return newList;
  }
};
