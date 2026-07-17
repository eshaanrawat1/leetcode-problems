---
date: 2024-07-25
difficulty: Medium
num: 45
related_topics:
  - Array
  - Dynamic Programming
  - Greedy
return: Review
---

# Problem: 45. Jump Game Ii

## Description
find min jump path from index 0 to -1

## Approach / Thoughts
dp and cache

## Solution
```python
class Solution:
    def jump(self, nums: List[int]) -> int:
        dp = {}
        def dfs(i):
            if i >= len(nums)-1:
                return 0
            if i in dp:
                return dp[i]

            jump = float("inf")
            for j in range(1, nums[i]+1):
                jump = min(jump, 1 + dfs(i + j))
            dp[i] = jump
            return jump
        return dfs(0)
```
