class LinkedList{
  constructor(){
    this.head = null;
    this.size = 0;
  }
  //Prepend (beginning)
  prepend(value){
    const newNode = new LinkedListNode(value, this.head);
    this.head = newNode;
    this.size++;
  }
  //Print List (value)
  //Append (end)
  //InsertAt(value, index)
  //GetAt (index)
  //DeleteAt (index)
  //ClearList

}

class LinkedListNode{
  constructor(value, next){
    this.value = value
    this.next = next
  }
}

module.exports = LinkedList;