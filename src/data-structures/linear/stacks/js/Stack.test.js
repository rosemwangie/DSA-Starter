const Stack = require("./StackArray");

describe("Stack array tests", () => {
    const stack = new Stack();
    stack.push("100");
    stack.push("200");

    test("should push element to top of stack", () => {
        const topElement = stack.peek();
        expect(topElement).toBe("200");
    });

    test("should pop element from top of stack and return new element top of stack", () => {
        const topElement = stack.pop();
        expect(topElement).toBe("100");
    });

    test("should return zero(0) if pop leaves stack empty", () => {
        const topElement = stack.pop();
        expect(topElement).toBe(0);
    });

    test("should return undefined if trying to pop empty stack", () => {
        const topElement = stack.pop();
        expect(topElement).toBe(undefined);
    });

    test("should return true if stack is empty", () => {
        const isEmpty = stack.isEmpty();
        expect(isEmpty).toBe(true);
    });
});