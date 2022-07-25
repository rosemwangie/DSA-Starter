const LinkedList = require("./LinkedList");

describe("#prepend", () => {
  test("it adds the element to the beginning of the list", () => {
    const myLinkedList = new LinkedList();
    myLinkedList.prepend(300);
    const oldHead = myLinkedList.head;
    myLinkedList.prepend(200);

    expect(myLinkedList.head.value).toBe(200);
    expect(myLinkedList.head.next).toBe(oldHead);
    expect(myLinkedList.size).toBe(2);
  });
});
