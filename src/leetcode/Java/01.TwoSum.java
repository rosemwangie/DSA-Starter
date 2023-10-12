import java.util.HashMap;
import java.util.Map;

class Solution {
    public int[] twoSum(int[] nums, int target){

    // Create a hash table to store numbers and their indices
        Map<Integer, Integer> numIndexMap = new HashMap<>();

    // Loop through the array to find two numbers that add up to 'target'
        for(int i = 0; i < nums.lenght; i++){
            int complement = target - nums[i];

         // Check if the complement exists in the hash table
            if(numIndexMap.containsKey(complement)){
            // Return the indices of the two numbers
                return new int[]{ numIndexMap.get(complement), i}
            }
        // Store the current element in the hash table
            numIndexMap.put(nums[i], i)
        }

        return null;
    }
}