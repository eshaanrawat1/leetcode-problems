---
date: 2025-12-21
difficulty: Hard
num: 1691
related_topics:
  - Array
  - Dynamic Programming
  - Sorting
return: Done
---

# Problem: 1691. Maximum Height By Stacking Cuboids

## Description
same, can rotate cubes

## Approach / Thoughts
lis, take skip

invariant means rotating all cubes same orientation is optimal

## Solution
```python
class Solution:
    def maxHeight(self, cuboids: List[List[int]]) -> int:
        N = len(cuboids)

        cuboids = [sorted(x) for x in cuboids]
        cuboids.sort()

        def cmp(x, y):
            prv = cuboids[x]
            cur = cuboids[y]

            return (
                prv[0] <= cur[0] and \
                prv[1] <= cur[1] and \
                prv[2] <= cur[2]
            )

        @lru_cache(None)
        def dfs(i, prev):
            if i >= N:
                return 0 

            skip = dfs(i+1, prev)

            take = -inf
            if prev == -1 or cmp(prev, i):
                take = cuboids[i][2] + dfs(i+1, i)
            return max(take, skip)

        return dfs(0, -1)
```
