---
date: 2025-11-05
difficulty: Medium
num: 3722
related_topics:
  - Binary Search
  - Enumeration
  - Two-Pointer
return: Done
---

# Problem: 3722. Lexicographically Smallest String After Reverse

## Description

## Approach / Thoughts
check every combo

## Solution
```python
class Solution:
    def lexSmallest(self, s: str) -> str:
        n = len(s)
        res = s

        for i in range(n):
            rev_first = s[:i][::-1] + s[i:]
            rev_last = s[:i] + s[i:][::-1]
            res = min(res, rev_first, rev_last)
        return res
```
