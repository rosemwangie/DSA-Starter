const palindrome = require("./Palindrome");

describe("palindromeCheck", () => {
  it("will return whether or not the string is a palindrome", () => {
    expect(palindrome("A man, a plan, a canal: Panama")).toBe(true);
    expect(palindrome("racecar")).toBe(true);
    expect(palindrome("peep")).toBe(true);
    expect(palindrome("mom")).toBe(true);
    expect(palindrome("")).toBe(true);
    expect(palindrome("car")).toBe(false);
    expect(palindrome("geeks")).toBe(false);
    expect(palindrome("hunt")).toBe(false);
  });
});

