---
date: 2025-12-30
difficulty: Hard
num: 1478
related_topics:
  - Array
  - Dynamic Programming
  - Math
  - Sorting
return: Done
---

# Problem: 1478. Allocate Mailboxes

## Description

## Approach / Thoughts
dp → best k intervals

optimal cost of each interval, place mailbox in median → consider all k intervals take skip dp

## Solution
```python
class Solution:
    def minDistance(self, houses: List[int], k: int) -> int:
        n = len(houses)
        houses.sort()

        def calc_median(g):
            med = statistics.median(g)
            return sum(abs(x-med) for x in g)

        median_costs = {}
        for i in range(n):
            for j in range(i, n):
                median_costs[(i,j+1)] = calc_median(houses[i:j+1])


        @lru_cache(None)
        def dfs(i, rem):
            if rem == 0:
                return 0 if i >= n else inf
            if i >= n:
                return 0 if rem == 0 else inf

            res = inf
            for j in range(i, n):
                take = median_costs[(i, j+1)] + dfs(j+1, rem-1)
                res = min(res, take)
            return res

        return int(dfs(0, k))
```
