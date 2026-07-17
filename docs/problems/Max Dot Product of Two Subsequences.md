---
date: 2026-01-07
difficulty: Hard
num: 1458
related_topics:
  - Array
  - Dynamic Programming
return: Done
---

# Problem: 1458. Max Dot Product Of Two Subsequences

## Description

## Approach / Thoughts
dp take skip track already taken

## Solution
```python
class Solution:
    def maxDotProduct(self, nums1: List[int], nums2: List[int]) -> int:
        m, n = len(nums1), len(nums2)

        @lru_cache(None)
        def dfs(i, j, take):
            if i >= m or j >= n:
                return 0 if take else -inf

            dot = nums1[i] * nums2[j] + dfs(i+1, j+1, True)
            skip1 = dfs(i+1, j, take or False)
            skip2 = dfs(i, j+1, take or False)
            return max(dot, skip1, skip2)

        return dfs(0, 0, False)
```
