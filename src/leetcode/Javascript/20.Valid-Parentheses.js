/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

* An input string is valid if:

- Open brackets must be closed by the same type of brackets.
- Open brackets must be closed in the correct order.
- Every close bracket has a corresponding open bracket of the same type.
*/

/**
 * @param {string} string
 * @return {boolean}
 */
const isValid = (string) => {
  let stack = [];
  
  //loop through each character in the string.
  for (let char of string) {
      // If the character is an opening parenthesis, add it to the stack.
      if (char === '(' || char === '[' || char === '{') {
          stack.push(char);
      }
      // If the character is a closing parenthesis, check if it's a valid match for the last
      // opening parenthesis on the stack.
      else {
          // If the stack is empty, that means there's a closing parenthesis without a matching opening one.
          // So the string is not valid.
          if (stack.length === 0) {
              return false;
          }
          // If the character is a closing parenthesis but there's no matching opening one on the stack,
          // the string is also not valid.
          else if ((char === ')' && stack[stack.length - 1] !== '(') || 
                   (char === ']' && stack[stack.length - 1] !== '[') || 
                   (char === '}' && stack[stack.length - 1] !== '{')) {
              return false;
          }
          // If the character is a closing parenthesis and there is a matching opening one on the stack,
          //  remove the opening parenthesis from the stack.
          else {
              stack.pop();
          }
      }
  }
  
  // If the stack is empty at the end, that means all the parentheses were matched.
  // So the string is valid.
  if (stack.length === 0) {
      return true;
  }
  // If there are still items on the stack, that means there are some unbalanced parentheses.
  // So the string is not valid.
  else {
      return false;
  }
};

console.log(isValid("()")) //Output: true
console.log(isValid("()[]{}")) //Output: true
console.log(isValid("(]")) //Output: false