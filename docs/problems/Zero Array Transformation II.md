---
date: 2025-03-13
difficulty: Medium
num: 3356
related_topics:
  - Array
  - Binary Search
  - Prefix Sum
return: Done
---

# Problem: 3356. Zero Array Transformation Ii

## Description
same as 3355, can choose min amount of sequential queries

## Approach / Thoughts
prefix sum + binary search

## Solution
```python
class Solution:
    def minZeroArray(self, nums: List[int], queries: List[List[int]]) -> int:
        n = len(nums)

        def bs(threshold):
            ps = [0] * (n + 1)
            for i in range(threshold):
                s, e, v = queries[i]
                ps[s] += v
                ps[e+1] -= v

            carry = 0
            for i, x in enumerate(nums):
                carry += ps[i]
                if x > carry:
                    return False
            return True

        l, r = 0, len(queries)
        res = -1

        while l <= r:
            mid = (l + r) // 2
            if bs(mid):
                r = mid - 1
                res = mid
            else:
                l = mid + 1
        return res
```
