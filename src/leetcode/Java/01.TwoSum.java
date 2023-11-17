//Brute force  O(n^2)
class Solution {
    public int[] twoSum(int[] nums, int target) {
        for(int i = 0; i < nums.length; i++){
            for(int j = i + 1; j < nums.length; j++){
                if(nums[i] + nums[j] == target){
                    return new int[]{i, j};
                }
            }

        }
        return nums;
    }
}

//Optimal Solution 
// Time Complexity 0(n) Space 0(n)
class Solution {
    public int[] twoSum(int[] nums, int target) {

    Map<Integer, Integer> complements = new HashMap<>();
        for(int i = 0; i < nums.length; i++){
            Integer complementIndex = complements.get(nums[i]);
            if(complementIndex != null){
                return new int[]{i, complementIndex};
            }
            complements.put(target - nums[i], i);
        }
        return nums;
    }
}