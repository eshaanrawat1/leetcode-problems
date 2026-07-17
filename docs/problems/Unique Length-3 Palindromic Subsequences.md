---
date: 2024-07-22
difficulty: Medium
num: 1930
related_topics:
  - Bit Manipulation
  - Hash Table
  - Prefix Sum
  - String
return: Done
---

# Problem: 1930. Unique Length 3 Palindromic Subsequences

## Description

## Approach / Thoughts
find first and last occurrences of letter

count all uniques in between (3-length)

## Solution
```python
class Solution:
    def countPalindromicSubsequence(self, s: str) -> int:
        total = 0
        for ch in set(s):
            first = s.find(ch)
            last = s.rfind(ch)

            in_between = len(set(s[first+1:last]))
            total += in_between
        return total
```
