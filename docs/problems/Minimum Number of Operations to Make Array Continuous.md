---
date: 2025-01-22
difficulty: Hard
num: 2009
related_topics:
  - Array
  - Binary Search
  - Hash Table
  - Sliding Window
return: Review
---

# Problem: 2009. Minimum Number Of Operations To Make Array Continuous

## Description

## Approach / Thoughts
range of elements included, account for duplicates

## Solution
```python
class Solution:
    def minOperations(self, nums: List[int]) -> int:
        n = len(nums)
        s = sorted(set(nums))
        m = len(s)

        j, res = 0, n - 1
        for i, start in enumerate(s):
            end = start + n - 1
            while j < m and s[j] <= end:
                j += 1
            res = min(res, n - (j - i))
        return res
```
