---
date: 2024-06-18
difficulty: Easy
num: 278
related_topics:
  - Binary Search
  - Interactive
return: Done
---

# Problem: 278. First Bad Version

## Description
find first bad version, all versions after are bad

## Approach / Thoughts
binary search

## Solution
```python
# The isBadVersion API is already defined for you.
# def isBadVersion(version: int) -> bool:

class Solution:
    def firstBadVersion(self, n: int) -> int:
        l, r = 0, n
        while l < r:
            m = (l + r) // 2
            if isBadVersion(m):
                r = m
            else:
                l = m + 1
        return l
```
