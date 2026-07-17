---
date: 2025-03-13
difficulty: Medium
num: 3355
related_topics:
  - Array
  - Prefix Sum
return: Done
---

# Problem: 3355. Zero Array Transformation I

## Description
same, process queries, dec range values by 1

## Approach / Thoughts
prefix sum

## Solution
```python
class Solution:
    def isZeroArray(self, nums: List[int], queries: List[List[int]]) -> bool:
        n = len(nums)
        ps = [0] * (n + 1)

        for s, e in queries:
            ps[s] -= 1
            ps[e+1] += 1

        for i in range(1, n+1):
            ps[i] += ps[i-1]

        for i, x in enumerate(nums):
            x +=  ps[i]
            if x > 0:
                return False
        return True
```
