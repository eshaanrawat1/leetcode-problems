---
date: 2025-06-23
difficulty: Easy
num: 2200
related_topics:
  - Array
  - Two-Pointer
return: Done
---

# Problem: 2200. Find All K Distant Indices In An Array

## Description

## Approach / Thoughts
brute force

## Solution
```python
class Solution:
    def findKDistantIndices(self, nums: List[int], key: int, k: int) -> List[int]:
        res = set()
        for i, n in enumerate(nums):
            for j, x in enumerate(nums):
                if abs(i - j) <= k and x == key:
                    res.add(i)
        return sorted(list(res))
```
