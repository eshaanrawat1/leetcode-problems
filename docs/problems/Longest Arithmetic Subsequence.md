---
date: 2025-01-07
difficulty: Medium
num: 1027
related_topics:
  - Array
  - Binary Search
  - Dynamic Programming
  - Hash Table
return: Done
---

# Problem: 1027. Longest Arithmetic Subsequence

## Description

## Approach / Thoughts
dp[i][diff] max length end with i, diff

## Solution
```python
class Solution:
    def longestArithSeqLength(self, nums: List[int]) -> int:
        res, n = 1, len(nums)
        dp = [Counter() for _ in nums]

        for i, x in enumerate(nums):
            for j in range(i):
                y = nums[j]
                diff = x - y

                dp[i][diff] = max(dp[i][diff], 1 + dp[j][diff])
                res = max(res, 1 + dp[i][diff])
        return res
```
