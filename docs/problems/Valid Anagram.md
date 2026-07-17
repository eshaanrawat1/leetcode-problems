---
date: 2023-07-26
difficulty: Easy
num: 242
related_topics:
  - Hash Table
  - Sorting
  - String
return: Done
---

# Problem: 242. Valid Anagram

## Description
The problem was to check if two strings were anagrams.

## Approach / Thoughts
My approach was to originally use a hashmap with a counter to track if the number of letters and the times of those letters were the same in both strings. However, I could not figure that out, so I just turned both strings to a char array, sorted them, and turned them back to strings and compared whether they were equal.

## Solution
```java
class Solution {
    public boolean isAnagram(String s, String t) {
        if (s.length() != t.length()) {
            return false;
        }
        char[] sC = s.toCharArray();
        char[] tC = t.toCharArray();
        Arrays.sort(sC);
        Arrays.sort(tC);
        String s1 = new String(sC);
        String t1 = new String(tC);
        return(s1.equals(t1));
    }
}
```
