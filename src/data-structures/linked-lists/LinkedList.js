class LinkedList{
  constructor(){
    this.head = null;
    this.size = 0;
  }
  //Prepend (beginning)  O(1)
  prepend(value){
    const newNode = new LinkedListNode(value, this.head);
    this.head = newNode;
    this.size++;
  }

  //Print List (value) O(n)
  getByIndex(index) {
    if (index < 0 || index >= this.length) return null

    let current = this.head
    for (let i = 0; i < index; i++) {
      current = current.next
    }
    return current
  }

  printList() {
    let output = ''
    let current = this.head
    while (current) {
      output = `${output}${current.value} -> `
      current = current.next
    }
    console.log(`${output}null`)
  }
}

class LinkedListNode{
  constructor(value, next){
    this.value = value
    this.next = next
  }
}

LinkedList.fromValues = (...values) => {
  const myLinkedList = new LinkedList()
  for (let i = values.length -1; i >=0; i--) {
    myLinkedList.prepend(values[i]);    
  }
  return myLinkedList;
}

module.exports = LinkedList;