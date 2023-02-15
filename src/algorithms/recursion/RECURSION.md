# Recursion
It's a technique in which a function repeatedly calls itself, until a specific condition is met and the function stops calling itself. This is achieved when a **[base case]()** is met.<br>It's a way of breaking down a problem into smaller, identical subproblems. <br>A function that calls itself is called a **recursive function** <br>

![5B0F1A0B-F65B-4CC6-B4FC-85C4CC5C79A6_4_5005_c](https://user-images.githubusercontent.com/77434770/212955521-221949ce-a80d-45b3-81cb-e9c782441eff.jpeg)


# A recursive function has three components:
* **The base** : which is the stopping point for the recursion
* **The reduction step** : which brings the inputcloser to the base case;
* **The recursive call** : where the function is invoked with the modified input

Example 1: 

**Factorial** 

```jsx
/**
 * Factorial
 * Time Complexity -> O(n)
 * Space Complexity -> O(n)
 */
const factorial = (num) => {
  //base case
  if (num === 2) return 2;
  //recursive case
  return num * factorial(num - 1);
};

console.log(factorial(10)); //3628800
```

The function **findFactorialRecursive** takes a single argument, 'n' and checks if it's equal to 2. If it is, the function returns 2. If not, the function return `n` multiplied by the factorial of `num - 1`. This is where the recursion happens - the function calls itself with the argument `num - 1`, and this process continues until the base case (`num === 1`) is reached. 


Example 2; 

**Fibonacci series/sequence**

```js
/**
 * fibonaci recursive
 * Time complexity -> O(2^n)
 * Space Complexity -> O(n)
 */
const fibonacci(num){
  //base case: if n is less than or equal to 2, return 1
  if(num <= 2){
    return 1;
  }
  //recursive case: n is greater than 2, so return the sum of the n-1th and n-2nd Fibonacci numbers
  else {
    return fibonacci(num-1) + fibonacci(num-2)
  }
}
console.log(fibonacci(10)); //55
```

In the above function, the base case is when `num` is less than or equal to 2. In this case, the function returns 1. This is the stopping point of the recursion. <br>
The **function** calls itself with argument `num - 1` and `num - 2`. This is where the recursion happens. The function continues to call itself until reaches the base case. The recursive calls keep returning values that get added together until `num` becomes less than or equal to 2. This is how the Fibonacci sequence is computed.


> To **note**: every recursive function needs a base case which is the point at which the recursion stops. Without it, the function will keep calling itself indefinitely, resulting in a stack overflow error. Recursion can be a powerful tool, bit it's important to use it judiciosly to avoid stack overflow errors.

<br>

### Rules of Recursion
1. Identify the base case
2. I dentify the recursive case
3. Get closer and closer and return when needed. (Have two returns for the base case and the recursive case)
