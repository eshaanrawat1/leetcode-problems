---
date: 2025-07-17
difficulty: Medium
num: 3202
related_topics:
  - Array
  - Dynamic Programming
return: Review
---

# Problem: 3202. Find The Maximum Length Of Valid Subsequence Ii

## Description

## Approach / Thoughts
same as arithmetic subseq - track index and potential remainders

## Solution
```python
class Solution:
    def maximumLength(self, nums: List[int], k: int) -> int:
        res, n = 1, len(nums)
        dp = [Counter() for _ in nums]

        for i, x in enumerate(nums):
            for j in range(i):
                y = nums[j]
                diff = (x + y) % k

                dp[i][diff] = max(dp[i][diff], 1 + dp[j][diff])
                res = max(res, 1 + dp[i][diff])
        return res
```
