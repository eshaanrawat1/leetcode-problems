---
date: 2026-02-02
difficulty: Hard
num: 2585
related_topics:
  - Array
  - Dynamic Programming
return: Done
---

# Problem: 2585. Number Of Ways To Earn Points

## Description

## Approach / Thoughts
dp take skip

## Solution
```python
class Solution:
    def waysToReachTarget(self, target: int, nums: List[List[int]]) -> int:
        n = len(nums)
        mod = 10**9+7

        @lru_cache(None)
        def dfs(i, pts):
            if pts > target:
                return 0
            if i >= n:
                return (pts == target)

            res = 0
            cnt, marks = nums[i]
            for j in range(cnt+1):
                res += dfs(i+1, pts+j*marks)
            return res % mod

        return dfs(0, 0)
```
