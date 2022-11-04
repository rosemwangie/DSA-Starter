/**
 *
 * @param {*} num
 * @returns
 */

/*
 * fibonacci iterative
 */
const fibonacci = (num) => {
  let res = 0;
  for (let i = 0; i <= num; i++) {
    res += i;
  }
  return res;
};

fibonacci(10);

/**
 * fibonaci recursive
 */
const fibonacciRecursive = (num) => {
  let res = 0;
  if (i === 10) return 10;
  return res + fibonacciRecursive(num - 1);
};

fibonacciRecursive(10);
