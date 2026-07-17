---
date: 2026-02-07
difficulty: Medium
num: 3634
related_topics:
  - Array
  - Senior
  - Sliding Window
  - Sorting
return: Done
---

# Problem: 3634. Minimum Removals To Balance Array

## Description

## Approach / Thoughts
binary search right

## Solution
```python
class Solution:
    def minRemoval(self, nums: List[int], k: int) -> int:
        n = len(nums)
        if n == 1:
            return 0

        res = inf
        nums.sort()

        for i, x in enumerate(nums):
            j = bisect_right(nums, x*k)
            res = min(res, i + n - j)
        return res
```
