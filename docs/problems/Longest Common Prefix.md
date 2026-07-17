---
date: 2023-08-08
difficulty: Easy
num: 14
related_topics:
  - String
  - Trie
return: Done
---

# Problem: 14. Longest Common Prefix

## Description
To find the longest common prefix among an array of strings.

## Approach / Thoughts
First, there was a test case if the length was 0 to return an empty string.

The way to solve this problem was to work backward. I took the first word as a testcase prefix since a valid prefix must be common to all the words. This would iterate through all the words in the array. There was also a while loop to iterate through all the letters of the string to find the index.

Basically, if the first word did not have an index 0 (which meant not a prefix) then the last letter would get chopped off. This would keep going until either the string is empty or a prefix is found between the 1st and 2nd words. This would cause the loop to move on to the third word and repeat the process.

## Solution
```java
class Solution {
    public String longestCommonPrefix(String[] strs) {

        if (strs.length == 0) {
            return "";
        }
        
        String res = strs[0];

        for (int i = 1; i < strs.length; i++) {
            while (strs[i].indexOf(res) != 0) {
                res = res.substring(0, res.length() - 1);
            }
        }
        return res;
    }
}
```
