/**
* *Write a function that takes an unsigned integer and returns the number of '1' bits it has 
  (also known as the Hamming weight).
*/

/** ~~solution uses bitwise operator~~
 * @param {number} n - a positive integer
 * @return {number}
 */
const hammingWeight = (n) => {
  //init count to track the number of 1's
  let res = 0;
  //loop until n bbecomes 0
  while (n !== 0){
    // check the least significant bit of n and add it to the res(count)
    res += n & 1;
    // shift n right by 1 bit
    n = n >>> 1; 
  }
  return res;
}

console.log(hammingWeight(00000000000000000000000000001011)) // Output: 3
console.log(hammingWeight(00000000000000000000000010000000)) // Output: 1
console.log(hammingWeight(11111111111111111111111111111101)) // Output: 31


/**
* Time complexity - O(log n)
*/
