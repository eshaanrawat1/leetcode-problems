---
date: 2024-09-19
difficulty: Medium
num: 1911
related_topics:
  - Array
  - Dynamic Programming
return: Done
---

# Problem: 1911. Maximum Alternating Subsequence Sum

## Description

## Approach / Thoughts
dp take skip

## Solution
```python
class Solution:
    def maxAlternatingSum(self, nums: List[int]) -> int:
        dp = [[None] * 2 for _ in range(len(nums))]

        def dfs(i, even):
            if i >= len(nums):
                return 0
            if dp[i][even] is not None:
                return dp[i][even]

            if even:
                take = nums[i] + dfs(i + 1, even - 1)
                skip = dfs(i + 1, even)
            else:
                take = -nums[i] + dfs(i + 1, even + 1)
                skip = dfs(i + 1, even)

            dp[i][even] = max(take, skip)
            return max(take, skip)

        return dfs(0, 1)
```
