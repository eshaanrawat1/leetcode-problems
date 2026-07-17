---
date: 2024-12-03
difficulty: Medium
num: 2825
related_topics:
  - String
  - Two-Pointer
return: Done
---

# Problem: 2825. Make String A Subsequence Using Cyclic Increments

## Description
same, can decrement sub

## Approach / Thoughts
check if character or down char is valid

same as valid subsequence

## Solution
```python
class Solution:
    def canMakeSubsequence(self, str1: str, str2: str) -> bool:
        l = r = 0
        s, t = str1, str2
        while l < len(s) and r < len(t):
            d = chr((ord(t[r]) - ord('a') - 1) % 26 + 97)

            if s[l] in [d, t[r]]:
                l += 1
                r += 1
            else:
                l += 1
        return r >= len(t)
```
