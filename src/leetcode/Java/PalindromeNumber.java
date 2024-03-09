class PalindromeNumber {
    public boolean isPalindrome(int x) {
        if(x < 0) return false;
        // convert int to string
        String palindrome = Integer.toString(x);
        // initialize left most & right most pointers
        int left = 0;
        int right = palindrome.length() - 1;
        // loop/iterate through the string
        while(left < right){
            // compare each char of the string at each pointers
            if(palindrome.charAt(left) != palindrome.charAt(right)){
                return false;
            }
            // moving pointers inwards
            left++;
            right--;
        }

        // return true;
        return true;
    }
}