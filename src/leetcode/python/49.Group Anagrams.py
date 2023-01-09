'''
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
typically using all the original letters exactly once.
'''

class Solution:
    #optimal sln-> Time Complexity O(n mlogm) Space Complexity O(n * m)
    def groupAnagram(self, strs: List[str]) -> List[List[str]]:
        #dictionary to store the sorted strings as keys and list of anagrams as values
        hashMap = {}
        for str in strs:
            #sort the strings to use as keys
            sorted_str = "".join(sorted(str))
            #check if the key is available in the dict
            if sorted_str not in hashMap:
                #insert the key to the dictionary if not
                hashMap[sorted_str] = [str]
            else:
                #if key is in dictionary append the anagrams to the keys
                hashMap[sorted_str].append(str)
            #return a list of anagrams(values) from the dictionary
        return list(hashMap.values())

s = Solution()
print(s.groupAnagram(["eat","tea","tan","ate","nat","bat"]))  #[["eat","tea","ate"],["tan","nat"],["bat"]]
print(s.groupAnagram([""]))     #[[""]]
print(s.groupAnagram(["a"]))    #[["a"]]