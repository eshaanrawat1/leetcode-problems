---
date: 2024-12-29
difficulty: Hard
num: 1639
related_topics:
  - Array
  - Dynamic Programming
  - String
return: Done
---

# Problem: 1639. Number Of Ways To Form A Target String Given A Dictionary

## Description

## Approach / Thoughts
dp top down - check how many of each target char at the given index take skip

## Solution
```python
class Solution:
    def numWays(self, words: List[str], target: str) -> int:
        mod = (10 ** 9 + 7)
        m, n = len(target), len(words[0])

        cnt = [Counter() for _ in range(n)]
        for w in words:
            for i, c in enumerate(w):
                cnt[i][c] += 1

        
        @lru_cache(None)
        def dfs(i, k):
            if k == m:
                return 1
            if i == n:
                return 0

            skip = dfs(i + 1, k)
            take = dfs(i + 1, k + 1) * cnt[i][target[k]]

            return (take + skip) % mod
        
        return dfs(0, 0) % mod
```
