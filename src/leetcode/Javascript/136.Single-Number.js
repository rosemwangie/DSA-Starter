/**
* Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
* You must implement a solution with a linear runtime complexity and use only constant extra space.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
 
 const singleNumber = (nums) => {
    //initialize an empty hash map to store the frequncy of each number
    let frequency = {};
    //iterate through the array
    for(let i = 0; i < nums.length; i++){
     //if the number is not in the the frequency object, add it with a value of 1
     if (!frequency[nums[i]]){
        frequency[nums[i]] = 1;
     }
     //if the number is already in the frequency object, increment its value by 1
     else {
      frequency[nums[i]]++;
     }
    }
   for(let num in frequency) {
    //if a number has a value of 1, return it
     if(frequency[num] === 1){
       return num;
     }
   }
 }
 
 console.log(singleNumber([2,2,1])) // Output: 1
  console.log(singleNumber([4,1,2,1,2])) // Output: 4
   console.log(singleNumber([2,2,1])) // Output: 1
   
/**
* Time Complexity - O(n) Where n is the number of elements in the input array. This is because we iterate through the input array twice,
  once to build the frequency object, and once to find the single number. 
* Space Complexity - O(n) where n is the number of elements in the array. This is because we use a hashmap to store the frequency
  of each number in the input array, and the size of this object will be at most n, which is the number of elements in the input 
  array
*/
