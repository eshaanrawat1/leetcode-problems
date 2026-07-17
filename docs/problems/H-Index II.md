---
date: 2026-01-01
difficulty: Medium
num: 275
related_topics:
  - Array
  - Binary Search
return: Done
---

# Problem: 275. H Index Ii

## Description

## Approach / Thoughts
binary search on possible h index

## Solution
```python
class Solution:
    def hIndex(self, citations: List[int]) -> int:
        n = len(citations)

        l, r = 0, 1000
        res = -1

        while l <= r:
            m = (l + r) // 2
            pos = bisect_left(citations, m)
            if n - pos >= m:
                res = m
                l = m + 1
            else:
                r = m - 1
        return res
```
