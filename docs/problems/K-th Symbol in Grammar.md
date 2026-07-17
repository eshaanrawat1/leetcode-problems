---
date: 2026-01-08
difficulty: Medium
num: 779
related_topics:
  - Bit Manipulation
  - Math
  - Recursion
return: Done
---

# Problem: 779. K Th Symbol In Grammar

## Description

## Approach / Thoughts
flip right same left

## Solution
```python
class Solution:
    def kthGrammar(self, n: int, k: int) -> int:

        @lru_cache(None)
        def dfs(n, k):
            if n == 1:
                return 0

            total = pow(2, n-1)
            half = total // 2

            if k > half:
                return 1 - dfs(n-1, k-half)
            return dfs(n-1, k)

        return dfs(n, k)
```
