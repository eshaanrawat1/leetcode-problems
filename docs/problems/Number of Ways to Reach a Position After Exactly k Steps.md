---
date: 2024-09-13
difficulty: Medium
num: 2400
related_topics:
  - Combinatorics
  - Dynamic Programming
  - Math
return: Done
---

# Problem: 2400. Number Of Ways To Reach A Position After Exactly K Steps

## Description

## Approach / Thoughts
dp with memo

## Solution
```python
class Solution:
    def numberOfWays(self, startPos: int, endPos: int, k: int) -> int:
        
        @cache
        def dfs(cnt, pos):
            if cnt == k and pos == endPos:
                return 1
            if cnt == k:
                return 0
            if endPos - pos > k - cnt:
                return 0

            return dfs(cnt + 1, pos - 1) + dfs(cnt + 1, pos + 1)
        
        return dfs(0, startPos) % (10 ** 9 + 7)
```
