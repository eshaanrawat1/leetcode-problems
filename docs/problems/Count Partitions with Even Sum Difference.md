---
date: 2025-12-04
difficulty: Easy
num: 3432
related_topics:
  - Array
  - Math
  - Prefix Sum
return: Done
---

# Problem: 3432. Count Partitions With Even Sum Difference

## Description

## Approach / Thoughts
prefix sums

## Solution
```python
class Solution:
    def countPartitions(self, nums: List[int]) -> int:
        n = len(nums)
        ps = nums[:]
        for i in range(1, n):
            ps[i] += ps[i-1]

        left = res = 0
        right = sum(nums)

        for i in range(n-1):
            left += nums[i]
            right -= nums[i]

            if (left - right) % 2 == 0:
                res += 1
        return res
```
