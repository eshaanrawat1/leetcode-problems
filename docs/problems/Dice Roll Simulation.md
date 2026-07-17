---
date: 2025-12-27
difficulty: Hard
num: 1223
related_topics:
  - Array
  - Dynamic Programming
return: Done
---

# Problem: 1223. Dice Roll Simulation

## Description

## Approach / Thoughts
dp state track prev face and prev streak

## Solution
```python
class Solution:
    def dieSimulator(self, n: int, rollMax: List[int]) -> int:
        mod = pow(10,9)+7

        @lru_cache(None)
        def dfs(i, prev, prev_cnt):
            if i >= n:
                return 1

            res = 0
            for j in range(1, 7):
                if j == prev and prev_cnt == rollMax[j-1]:
                    continue
                elif j == prev:
                    res += dfs(i+1, j, prev_cnt+1) % mod
                else:
                    res += dfs(i+1, j, 1)
            return res % mod

        return dfs(0, 0, 0) % mod
```
