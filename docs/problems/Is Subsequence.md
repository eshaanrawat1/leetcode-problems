---
date: 2023-07-20
difficulty: Easy
num: 392
related_topics:
  - Dynamic Programming
  - String
  - Two-Pointer
return: Done
---

# Problem: 392. Is Subsequence

## Description
The problem was to find whether one string value was a subsequence of the other. What this means is that abc would be a subsequence of aebsc because the letters appear in the same order, even though they are not

## Approach / Thoughts
My approach after doing the leetcode lectures was to use a two pointer. If the indexes were the same character, then both counters move up. Otherwise, only the longer word counter moves.

If a is a subsequence of b, then the first counter should have traversed the entire sub word and be the same length, thus we can return (a == s.length).

## Solution
```java
class Solution {
    public boolean isSubsequence(String s, String t) {
        
        int a = 0; 
        int b = 0;

        while (a < s.length() && b < t.length()) {
            if (s.charAt(a) == t.charAt(b)) {
                a++;
            }
            b++;
        }

        return (a == s.length());
    }
}
```
