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
  if (num <= 2) {
    return 1
  }

  return  fibonacciRecursive(num-1) + fibonacciRecursive(num-2)

};

fibonacciRecursive(10);  //Ouput -> 55
 
