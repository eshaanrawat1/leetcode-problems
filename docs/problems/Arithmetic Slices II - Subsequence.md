---
date: 2025-01-07
difficulty: Hard
num: 446
related_topics:
  - Array
  - Dynamic Programming
return: Review
---

# Problem: 446. Arithmetic Slices Ii   Subsequence

## Description

## Approach / Thoughts
dp bottom up - dp of dicts to count i,diff

count ends with j for valid ≥ 3

## Solution
```python
class Solution:
    def numberOfArithmeticSlices(self, nums: List[int]) -> int:
        res, n = 0, len(nums)
        dp = [Counter() for _ in nums]

        for i, x in enumerate(nums):
            for j in range(i):
                y = nums[j]
                diff = x - y

                dp[i][diff] += 1 + dp[j][diff]
                res += dp[j][diff] 
        return res
```
