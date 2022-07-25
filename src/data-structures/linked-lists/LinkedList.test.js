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
  })
})

describe('#getByIndex', () => {
  describe('with index less than 0', () => {
    test('it returns null', () => {
      const myLinkedList = LinkedList.fromValues(10, 20)

      expect(myLinkedList.getByIndex(-1)).toBeNull()
    })
  })

  describe('with index greater than list length', () => {
    test('it returns null', () => {
      const myLinkedList = LinkedList.fromValues(10, 20)

      expect(myLinkedList.getByIndex(5)).toBeNull()
    })
  })

  describe('with index 0', () => {
    test('it returns the head', () => {
      const myLinkedList = LinkedList.fromValues(10, 20)

      expect(myLinkedList.getByIndex(0).value).toBe(10)
    })
  })

  describe('with index in the middle', () => {
    test('it returns the element at that index', () => {
      const myLinkedList = LinkedList.fromValues(10, 20, 30, 40)

      expect(myLinkedList.getByIndex(2).value).toBe(30)
    })
  })
})
