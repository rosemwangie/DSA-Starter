//code solution
const reverseLinkedList = (head) => {
  let previous = null;
  let currentNode = head;
  while (currentNode) {
    // while current node is not null perform operation
    let next = currentNode.next;
    currentNode.next = prev;
    prev = currentNode;
    currentNode = next;
  }
  return previous;
};

//test cases (utility problem)
// 1. Empty Linked List return null >> null
// 2. Single Node  return the node  >> 1-->null
// 3. number additional nodes // 1 --> 2 --> 3 --> 4 --> null  || 4-->3-->2-->1-->null
console.log(reverseLinkedList(empty)); //null
console.log(reverseLinkedList(1)); // 1--> null
console.log(reverseLinkedList([1, 2, 3, 4, 5])) // 5,4,3,2,1

// Complexity Analysis // 5,4,3,2,1 // 5,4,3,2,1
`
    O(n) T - Linear Time - We will iterate n nodes
    O(1) S - Constant Space - No space required
`;
