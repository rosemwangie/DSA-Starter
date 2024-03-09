//Brute force  O(n^2) 
class Solution {
    public boolean containsDuplicate(int[] nums) {
       int len = nums.length;
        Arrays.sort(nums);
        for(int i = 0; i < len - 1; i++){
            if(nums[i] == nums[i + 1]){
                return true;
            }
        }
        return false;  
    }
}

//Optimal solution 
// Time complexity 0(n) Space complexity 0(n)
class Solution {
    public boolean containsDuplicate(int[] nums) {
      HashSet<Integer> numbers = new HashSet<>();
        for(int i = 0; i < nums.length; i++){
            if(numbers.contains(nums[i])){
                return true;
            }
            numbers.add(nums[i]);
        }
        return false;
    }
}