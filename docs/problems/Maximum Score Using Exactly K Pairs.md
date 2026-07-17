---
date: 2026-02-17
difficulty: Hard
num: 3836
related_topics:
  - Array
  - Dynamic Programming
  - Senior Staff
return: Done
---

# Problem: 3836. Maximum Score Using Exactly K Pairs

## Description

## Approach / Thoughts
dp take skip

## Solution
```python
class Solution:
    def maxScore(self, nums1: List[int], nums2: List[int], k: int) -> int:
        n, m = len(nums1), len(nums2)
        dp = [[[None] * k for _ in range(m)] for _ in range(n)]

        def dfs(i, j, cnt):
            if cnt == k:
                return 0 
            if i >= n or j >= m:
                return -inf if cnt < k else 0

            if dp[i][j][cnt] is not None:
                return dp[i][j][cnt]

            take = nums1[i] * nums2[j] + dfs(i+1, j+1, cnt+1)
            skip1 = dfs(i, j+1, cnt)
            skip2 = dfs(i+1, j, cnt)

            dp[i][j][cnt] = max(take, skip1, skip2)
            return max(take, skip1, skip2)
            
        return dfs(0, 0, 0)
```
