---
date: 2024-10-30
difficulty: Hard
num: 2463
related_topics:
  - Array
  - Dynamic Programming
  - Sorting
return: Done
---

# Problem: 2463. Minimum Total Distance Traveled

## Description
match robots to factory

## Approach / Thoughts
greedy sort

## Solution
```python
class Solution:
    def minimumTotalDistance(self, robot: List[int], factory: List[List[int]]) -> int:
        robot.sort()
        factory.sort()

        factories = []
        for f, l in factory:
            for i in range(l):
                factories.append(f)

        dp = [[None] * len(factories) for _ in range(len(robot))]

        def dfs(ri, fi):
            if ri >= len(robot):
                return 0
            if fi >= len(factories):
                return float("inf")
            if dp[ri][fi] is not None:
                return dp[ri][fi]

            take = abs(robot[ri] - factories[fi]) + dfs(ri + 1, fi + 1)
            skip = dfs(ri, fi + 1)

            dp[ri][fi] = min(take, skip)
            return dp[ri][fi]

        return dfs(0, 0)
```
