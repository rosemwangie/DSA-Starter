'''Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. 

No two characters may map to the same character, but a character may map to itself.

'''

#**NOTE** The term ASCII characters means that the characters have a standard numeric value
#this means that the space complexity of the characters although mapped in a hashTable will be O(1)


class Solution:

    #Optimal sln1: Time Complexity O(n): Space complexity O(1)
    def isIsomorphic(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        sHash, tHash = {}, {}
        for i in range(len(s)):
            charS = s[i]
            charT = t[i]
            if charS not in sHash:
                sHash[charS] = charT
            if charT not in tHash:
                tHash[charT] = charS
            if sHash[charS] != charT or tHash[charT] != charS:
                return False
        return True


print(Solution().isIsomorphic("egg", "add"))  #True
print(Solution().isIsomorphic("foo", "bar"))  #False
print(Solution().isIsomorphic("paper", "title"))  #True
