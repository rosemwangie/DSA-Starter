/** Given an integer array nums and an integer k, 
return the k most frequent elements.
You may return the answer in any order.
*/  

/**
 *
 * @param {*} nums
 * @param {*} k
 */

const topKFrequent = (nums, k) => {
    // Create an empty object to store the frequency of each element
    const freq = {};
  
    // Iterate through the array and update the frequency of each element
    for (let num of nums) {
      freq[num] = (freq[num] || 0) + 1;
    }
  
    // Create an array of the unique elements in the input array
    const unique = Object.keys(freq);
  
    // Sort the unique elements by their frequency in descending order
    unique.sort((a, b) => freq[b] - freq[a]);
  
    // Convert the top k elements from strings to numbers
    const topK = unique.slice(0, k).map(Number);
  
    // Return the top k elements as an array of numbers
    return topK;
  };
  
console.log(topKFrequent([1,1,1,2,2,3], 2)); // Output: [1,2]
console.log(topKFrequent([1], 1)); // Output: [1]
console.log(topKFrequent([], 8)); // Output: []

/** 
   * Time complexity: O(n log n) 
   * - The time complexity is dominated by the sorting operation on the unique array, which takes O(n log n) time in the worst case. The rest of the operations take O(n) time in the worst case.

Space complexity: O(n) 
- The space complexity is dominated by the freq object, which can potentially store all n elements in the input array, giving a space complexity of O(n).
 The unique array and other variables take O(k) space, which is negligible compared to O(n).
*/