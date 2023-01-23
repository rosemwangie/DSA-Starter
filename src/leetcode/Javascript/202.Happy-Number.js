/*
* Write an algorithm to determine if a number n is happy.
*/
/**
 * @param {number} num
 * @return {boolean}
 */
const isHappy = (num) => {
  // Create a set/hashmap to store previous numbers that we've seen
  let seen = new Set();
  
  // Keep looking until we reach 1 or we've seen the same number before 
  while (num !== 1 && !seen.has(num)) {
    seen.add(num);
    
    //Replace the number with the sum of the squares of its digits 
    let nextNum = 0; 
    //convert number to string and split each digit 
    let digits =num.toString().split(''); 
    for(let i = 0; i < digits.length; i++){
      nextNum += parseInt(digits[i]) ** 2;
    }
    num = nextNum;
  }
  //return whether or not we reached 1
  return num === 1;
}

console.log(isHappy(19));  //Output: true
console.log(isHappy(2));  //Output: false
console.log(isHappy(22));  //Output: false

/*
* Time complexity - O(k) where k is the number is not a happy number. 
In the worst case, this could be an infiniite loop, but for most numbers it will be a relatively small constant.
*/
