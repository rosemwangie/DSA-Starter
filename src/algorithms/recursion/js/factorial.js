/**
 *
 * @param {*} num
 * @returns
 */

/**
 * Iteratively
 */
const findFactorial = (num) => {
  let res = 1;
  if (num === 2) return 2;
  for (let i = 2; i <= num; i++) {
    res *= i;
  }
  return res;
};

findFactorial(20);

modules.export();
